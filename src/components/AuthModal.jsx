import React from 'react';
import { Link } from 'react-router-dom';
import AccessibleModal from './AccessibleModal';

export default function AuthModal({ isOpen, onClose }) {
    return (
        <AccessibleModal isOpen={isOpen} onClose={onClose} titleId="account-dialog-title">
            <p className="eyebrow">Stay in touch</p><h2 id="account-dialog-title">Need help with a project?</h2>
            <p>Online account access is not available yet. Our team can help with enquiries, project updates and support.</p>
            <div className="support-actions"><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a><Link className="button button-secondary" to="/website" onClick={onClose}>Explore our services</Link></div>
        </AccessibleModal>
    );
}
