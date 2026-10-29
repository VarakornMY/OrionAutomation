import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/supporting.css';

export default function NotFound() {
    return (
        <div className="page-shell support-state-page">
            <SEO title="Page not found" description="We couldn't find this page. Explore Orion Automation's services or return to the homepage." robots="noindex, follow" />
            <section className="container support-state-wrap">
                <div className="support-state-card">
                    <h1>Page not found</h1>
                    <p>The address may be incorrect or the page has moved.</p>
                    <div className="support-actions"><Link className="button button-primary" to="/">Back to home</Link><Link className="button button-secondary" to="/ai-automation">Explore our services</Link></div>
                </div>
            </section>
        </div>
    );
}
