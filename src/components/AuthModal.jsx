import React from 'react';
import { Link } from 'react-router-dom';
import AccessibleModal from './AccessibleModal';

export default function AuthModal({ isOpen, onClose }) {
    return (
        <AccessibleModal isOpen={isOpen} onClose={onClose} titleId="account-dialog-title">
            <h2 id="account-dialog-title">Contact Orion</h2>
            <p>Online account access is not available yet. Our team can help with enquiries, project updates and support.</p>
            <div className="support-actions"><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a><Link className="button button-secondary" to="/website" onClick={onClose}>Website services</Link></div>
        </AccessibleModal>
    );
}
