import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import AccessibleModal from './AccessibleModal';

export default function ProfileModal({ isOpen, onClose }) {
    const { user, logout } = useUser();
    return <AccessibleModal isOpen={isOpen && Boolean(user)} onClose={onClose} titleId="profile-dialog-title">{user && <><p className="eyebrow">Saved on this browser</p><h2 id="profile-dialog-title">Hello, {user.username || user.name}.</h2><p>This profile is stored on this device. Online account and subscription management are not available yet.</p><div className="support-actions"><Link className="button button-primary" to="/profile" onClick={onClose}>View browser profile</Link><button className="button button-secondary" onClick={()=>{logout();onClose();}}>Clear browser profile</button></div></>}</AccessibleModal>;
}
