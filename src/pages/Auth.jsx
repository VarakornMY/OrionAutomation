import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/supporting.css';

export default function Auth() {
    return (
        <div className="page-shell support-state-page">
            <SEO title="Client enquiries" description="Contact Orion Automation about your project, services or existing work." canonical="/auth" robots="noindex, follow" />
            <section className="container support-state-wrap">
                <div className="support-state-card">
                    <h1>Client enquiries</h1>
                    <p>Online account access is not available yet. For project updates, service enquiries or support, get in touch with the Orion team directly.</p>
                    <div className="support-actions">
                        <a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Contact us on WhatsApp</a>
                        <a className="button button-secondary" href="mailto:orionaiautomation@gmail.com">Send an email</a>
                    </div>
                    <Link className="support-text-link" to="/">Back to the website</Link>
                </div>
            </section>
        </div>
    );
}
