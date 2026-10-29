"""Migration checks without real credentials or writes to the local CMS key."""

import json
import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from fastapi.testclient import TestClient

from backend import drive_storage, keys
from backend.main import app


class CloudflareMigrationTests(unittest.TestCase):
    def test_drive_credentials_can_come_from_runtime_secret(self):
        with patch.dict(os.environ, {"GOOGLE_SERVICE_ACCOUNT_JSON_CONTENT": '{"type":"service_account"}'}), \
             patch.object(drive_storage.service_account.Credentials, "from_service_account_info") as creds, \
             patch.object(drive_storage, "build") as build:
            drive_storage._build_service()
            creds.assert_called_once_with({"type": "service_account"}, scopes=drive_storage.SCOPES)
            build.assert_called_once_with("drive", "v3", credentials=creds.return_value, cache_discovery=False)

    def test_mcp_key_restores_after_fresh_container_and_rotation(self):
        record = {"key": "test-restored-key", "createdAt": "2026-10-29", "rotatedAt": "2026-10-29"}
        with tempfile.TemporaryDirectory() as directory, \
             patch.object(keys, "_KEY_FILE", Path(directory) / "key.json"), \
             patch.object(keys, "_cached", None), \
             patch.dict(os.environ, {"MCP_KEY_RECORD_JSON": json.dumps(record)}):
            self.assertEqual(keys.get_metadata(), record)
            self.assertTrue(keys.is_valid(record["key"]))
            rotated = keys.rotate()
            self.assertNotEqual(rotated["key"], record["key"])
            self.assertFalse(keys.is_valid(record["key"]))
            # The Worker persists the rotation, then injects it into a new image.
            keys._KEY_FILE.unlink()
            keys._cached = None
            os.environ["MCP_KEY_RECORD_JSON"] = json.dumps(rotated)
            self.assertTrue(keys.is_valid(rotated["key"]))

    def test_health_auth_and_mcp_initialization_at_public_path(self):
        record = {"key": "test-mcp-token", "createdAt": "2026-10-29", "rotatedAt": "2026-10-29"}
        with patch.object(keys, "_cached", record), \
             patch.dict(os.environ, {"ADMIN_USERNAME": "test-admin", "ADMIN_PASSWORD": "test-password"}), \
             TestClient(app, base_url="http://localhost:8000") as client:
            self.assertEqual(client.get("/healthz").json(), {"ok": True})
            self.assertEqual(client.get("/api/admin/mcp-key").status_code, 401)
            login = client.post("/api/admin/login", json={"username": "test-admin", "password": "test-password"})
            self.assertEqual(login.status_code, 200)
            self.assertEqual(client.post("/mcp/", headers={"Authorization": "Bearer wrong"}).status_code, 401)
            response = client.post("/mcp/", headers={
                "Authorization": "Bearer test-mcp-token",
                "Accept": "application/json, text/event-stream",
            }, json={"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {
                "protocolVersion": "2025-03-26", "capabilities": {},
                "clientInfo": {"name": "migration-test", "version": "1"},
            }})
            self.assertEqual(response.status_code, 200, response.text)
            self.assertIn('"serverInfo"', response.text)


if __name__ == "__main__":
    unittest.main()
