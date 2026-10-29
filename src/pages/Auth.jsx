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
                    <p className="eyebrow">How can we help?</p>
                    <h1>Let's talk about your project.</h1>
                    <p>Online account access is not available yet. For project updates, service enquiries or support, get in touch with the Orion team directly.</p>
                    <div className="support-actions">
                        <a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Contact us on WhatsApp <span aria-hidden="true">↗</span></a>
                        <a className="button button-secondary" href="mailto:marketing@orionautomation.xyz">Send an email</a>
                    </div>
                    <Link className="support-text-link" to="/">Back to the website <span aria-hidden="true">→</span></Link>
                </div>
            </section>
        </div>
    );
}
