import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import SEO from '../components/SEO';
import '../styles/supporting.css';

export default function Profile() {
    const { user, logout, updateProfile, loading } = useUser();
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => { setUsername(user?.username || ''); }, [user?.username]);
    function save(event) {
        event.preventDefault();
        if (!username.trim()) { setMessage('Please enter a display name.'); return; }
        updateProfile({ username: username.trim() });
        setMessage('Your display name has been saved on this browser.');
    }
    return <div className="page-shell support-state-page"><SEO title="Browser profile" description="Your locally saved Orion Automation profile." canonical="/profile" robots="noindex, nofollow" /><section className="container support-state-wrap"><div className="support-state-card">
        <h1>Browser profile</h1>
        {loading ? <p role="status">Loading your profile…</p> : user ? <>
            <p>This information is saved in this browser. Online account access and subscription management are not available yet.</p>
            <form onSubmit={save} className="support-form"><label htmlFor="profile-display-name">Display name</label><input id="profile-display-name" type="text" autoComplete="nickname" value={username} onChange={event=>{setUsername(event.target.value);setMessage('');}} maxLength={80} required /><button className="button button-primary" type="submit">Save display name</button><p className="support-form-message" role="status">{message}</p></form>
            <div className="support-profile-actions"><Link to="/website" className="support-text-link">Website services</Link><button type="button" className="support-text-button" onClick={logout}>Clear browser profile</button></div>
        </> : <><p>No profile is saved on this browser.</p><div className="support-actions"><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Contact the team</a><Link className="button button-secondary" to="/">Back to home</Link></div></>}
    </div></section></div>;
}
