import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/services.css';

const disciplines = [
    { title: 'Search engine optimisation', description: 'Improve how your website appears in Google and Bing through technical fixes and relevant content.', items: ['Technical SEO and Core Web Vitals', 'Content and keyword strategy', 'Site structure and backlinks'] },
    { title: 'Answer engine optimisation', description: 'Structure content so answer engines, featured snippets, and voice assistants can understand it.', items: ['Structured data and FAQ schema', 'Clear answers to customer questions', 'Content others can reference'] },
    { title: 'Generative engine optimisation', description: 'Make your business information consistent and readable for tools that summarise and recommend services.', items: ['Consistent business information', 'Content that shows your expertise', 'Clearly organised information'] },
];

const Marketing = () => (
    <div className="page-shell service-page">
        <SEO title="Search & Marketing" description="SEO, answer engine optimisation, and generative engine optimisation for Malaysian businesses." canonical="/marketing" />
        <section className="page-hero">
            <div className="container">
                <h1 className="page-title">Search & marketing</h1>
                <div className="service-actions">
                    <a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss a project</a>
                    <a className="button button-secondary" href="#marketing-services">Services</a>
                </div>
            </div>
        </section>
        <section className="section" id="marketing-services" aria-labelledby="marketing-disciplines">
            <div className="container">
                <h2 className="section-heading" id="marketing-disciplines">Services</h2>
                <div className="feature-grid">
                    {disciplines.map((discipline) => (
                        <article className="surface-card" key={discipline.title}>
                            <h3>{discipline.title}</h3>
                            <p>{discipline.description}</p>
                            <ul className="detail-list">{discipline.items.map((item) => <li key={item}>{item}</li>)}</ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
        <section className="section" aria-labelledby="marketing-focus">
            <div className="container">
                <h2 className="section-heading" id="marketing-focus">What we work on</h2>
                <div className="feature-grid">
                    <article className="surface-card"><h3>Audience & keywords</h3><p>Plan content around the questions and search terms behind customer enquiries.</p></article>
                    <article className="surface-card"><h3>Content & structure</h3><p>Organise services and business information so people and search tools can understand them.</p></article>
                    <article className="surface-card"><h3>Enquiries</h3><p>Connect relevant pages with clear navigation and straightforward ways to contact your business.</p></article>
                </div>
            </div>
        </section>
        <section className="section" aria-labelledby="marketing-website">
            <div className="container"><div className="contact-band"><h2 id="marketing-website">Need a website too?</h2><Link className="button button-secondary" to="/website">Website packages</Link></div></div>
        </section>
        <section className="section" aria-labelledby="marketing-next-step">
            <div className="container"><div className="contact-band"><h2 id="marketing-next-step">Discuss your marketing</h2><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Contact Orion</a></div></div>
        </section>
    </div>
);

export default Marketing;
