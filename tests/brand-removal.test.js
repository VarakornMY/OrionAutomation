import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';

const removedFiles = [
    'public/SUMI-KA',
    'public/HOTZILLA',
    'public/benjy-cafe',
    'public/sumika-card.jpg',
    'public/hotzilla-logo.jpg',
    'public/benjy-cafe-logo.jpg',
    'src/pages/WebsitePortfolio.jsx',
    'src/pages/SumikaViewer.jsx',
    'src/pages/HotzillaViewer.jsx',
    'src/pages/BenjyCafeViewer.jsx',
    'src/components/ProjectPreview.jsx',
];

test('removed restaurant demos and their assets cannot be shipped again', () => {
    for (const file of removedFiles) {
        assert.equal(existsSync(new URL(`../${file}`, import.meta.url)), false, `${file} must remain absent`);
    }
});

test('production source contains no removed restaurant project references', () => {
    const forbidden = /sumi[-\s]?ka|hotzilla|benjy[-\s]?cafe/i;
    const textFile = /\.(?:jsx?|css|html|json|py|xml|txt)$/i;
    const visit = directory => {
        for (const entry of readdirSync(new URL(`../${directory}`, import.meta.url), { withFileTypes: true })) {
            const file = `${directory}/${entry.name}`;
            if (entry.isDirectory() && entry.name !== '__pycache__') visit(file);
            else if (entry.isFile() && textFile.test(entry.name)) {
                assert.equal(forbidden.test(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8')), false, `${file} must not promote a removed project`);
            }
        }
    };
    for (const directory of ['src', 'backend', 'public']) visit(directory);
});
