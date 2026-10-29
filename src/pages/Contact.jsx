import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BusinessDetails from '../components/BusinessDetails';
import { business, organizationSchema } from '../data/business';
import '../styles/supporting.css';

export default function Contact() {
    return (
        <div className="page-shell contact-page">
            <SEO title="Contact Orion Automation" description={`Contact ${business.name} for website development, automation, chatbot and search marketing enquiries. Phone ${business.phoneDisplay} or email ${business.email}.`} canonical="/contact" structuredData={{ '@context': 'https://schema.org', '@type': 'ContactPage', '@id': `${business.url}/contact#page`, url: `${business.url}/contact`, name: 'Contact Orion Automation', mainEntity: { '@id': organizationSchema['@id'] } }} />
            <section className="page-hero container"><h1 className="page-title">Contact Orion</h1></section>
            <section className="section container business-contact-layout" aria-labelledby="contact-details-title">
                <div>
                    <h2 id="contact-details-title">Contact details</h2>
                    <dl className="business-details">
                        <div><dt>Email</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a></dd></div>
                        <div><dt>Phone</dt><dd><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a></dd></div>
                        <div><dt>WhatsApp</dt><dd><a href={business.whatsapp} target="_blank" rel="noopener noreferrer">Message Orion</a></dd></div>
                    </dl>
                </div>
                <div className="business-enquiries">
                    <h2>Project enquiries</h2>
                    <p>Send your business name, the service you need, and any existing website or tools. We can then discuss the scope and prepare a quotation.</p>
                    <p>For an existing project, include the project name and the support you need.</p>
                    <Link className="text-link" to="/website#website-pricing">Website packages</Link>
                </div>
            </section>
            <section className="section container business-information" aria-labelledby="business-details-title">
                <h2 id="business-details-title">Business details</h2>
                <BusinessDetails />
                <div className="business-policy-links"><Link to="/about-us">About Orion</Link><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms-and-conditions">Terms & conditions</Link></div>
            </section>
        </div>
    );
}
