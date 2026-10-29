import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BusinessDetails from '../components/BusinessDetails';
import { business, organizationSchema } from '../data/business';
import '../styles/supporting.css';

export default function AboutUs() {
    return (
        <div className="page-shell about-page">
            <SEO title="About Orion Automation" description={business.description} canonical="/about-us" structuredData={{ '@context': 'https://schema.org', '@type': 'AboutPage', url: `${business.url}/about-us`, name: 'About Orion Automation', mainEntity: { '@id': organizationSchema['@id'] } }} />
            <section className="page-hero container"><h1 className="page-title">Orion Automation</h1></section>
            <section className="section container about-layout">
                <div className="about-copy">
                    <p>Orion Automation provides website development, workflow automation, AI chatbots and search marketing for businesses in Malaysia.</p>
                    <p>Our work covers business websites and online stores, connections between existing tools, customer enquiry and booking systems, and search visibility.</p>
                    <Link className="button button-primary" to="/contact">Contact Orion</Link>
                </div>
                <div className="about-services">
                    <h2>Services</h2>
                    <ul>
                        <li><Link to="/website">Website development</Link></li>
                        <li><Link to="/ai-automation">AI automation</Link></li>
                        <li><Link to="/ai-chatbot">AI chatbots</Link></li>
                        <li><Link to="/marketing">Digital marketing</Link></li>
                    </ul>
                </div>
            </section>
            <section className="section container business-information" aria-labelledby="working-with-orion">
                <h2 id="working-with-orion">Working with Orion</h2>
                <ol className="business-process">
                    <li><h3>Discuss the work</h3><p>Tell us what you need and which tools you use. We review the requirements with you.</p></li>
                    <li><h3>Agree on scope</h3><p>The quotation sets out the deliverables, timeline, fees and any third-party costs before work starts.</p></li>
                    <li><h3>Build and hand over</h3><p>Review the work before launch. Handover and support follow the agreed project scope.</p></li>
                </ol>
            </section>
            <section className="section container business-information" aria-labelledby="about-business-details">
                <h2 id="about-business-details">Business details</h2>
                <BusinessDetails />
            </section>
        </div>
    );
}
