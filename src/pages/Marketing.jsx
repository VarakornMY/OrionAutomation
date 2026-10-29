import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icons';
import SEO from '../components/SEO';
import '../styles/services.css';

const disciplines = [
    { icon: 'search', title: 'SEO', name: 'Search Engine Optimization', description: 'Strengthen how your website appears in Google and Bing with a sound technical foundation and content that answers the right questions.', items: ['Technical SEO and Core Web Vitals', 'Content and keyword strategy', 'Site structure and backlinks'] },
    { icon: 'chatbot', title: 'AEO', name: 'Answer Engine Optimization', description: 'Make your content easier for answer engines, featured snippets, and voice assistants to understand and reference.', items: ['Structured data and FAQ schema', 'Clear, concise answers', 'Useful, citable content'] },
    { icon: 'zap', title: 'GEO', name: 'Generative Engine Optimization', description: 'Build a clear and authoritative presence that generative tools can understand when they summarise and recommend businesses.', items: ['Consistent brand and entity signals', 'Authoritative content', 'Readable, structured information'] },
];

const Marketing = () => (
    <div className="page-shell service-page">
        <SEO title="Modern Marketing — SEO, AEO & GEO" description="Help customers discover your business through search engines, answer engines, and generative AI with a clear, structured web presence." keywords="SEO, AEO, GEO, Answer Engine Optimization, Generative Engine Optimization, Malaysia" canonical="/marketing" />
        <section className="page-hero">
            <div className="container">
                <nav className="service-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/website">Websites</Link><span aria-hidden="true">/</span><span>Modern marketing</span></nav>
                <div className="service-hero-grid">
                    <div>
                        <p className="eyebrow">Modern marketing</p>
                        <h1 className="page-title">Be easier to find.<br />And easier to choose.</h1>
                        <p className="page-description">Your customers discover businesses in more than one place. Bring search, answer engines, and generative AI into a more considered strategy for your website.</p>
                        <div className="service-actions"><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss your visibility <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#marketing-services">Explore our approach</a></div>
                        <p className="service-hero-note">SEO, AEO, and GEO. One connected web presence.</p>
                    </div>
                    <aside className="service-summary">
                        <p className="eyebrow">The path to discovery</p>
                        <h2>Make the next step feel obvious.</h2>
                        <div className="workflow-preview">
                            {[['01', 'Discover', 'Help people find you when they need your services.'], ['02', 'Understand', 'Give search and AI tools clear, useful information.'], ['03', 'Choose', 'Connect relevant visits with a useful next action.']].map(([number, title, description]) => <div className="workflow-preview-item" key={number}><span className="step-count" aria-hidden="true">{number}</span><div><strong>{title}</strong><small>{description}</small></div></div>)}
                        </div>
                        <p className="summary-footnote">A strong foundation combines useful content, technical quality, and clear business information.</p>
                    </aside>
                </div>
            </div>
        </section>
        <section className="section section-tinted" id="marketing-services" aria-labelledby="marketing-disciplines">
            <div className="container">
                <div className="service-section-intro"><p className="eyebrow">Three complementary disciplines</p><h2 className="section-heading" id="marketing-disciplines">Built for the way people search.</h2><p className="section-description">Keep the fundamentals strong while making your content useful across new discovery channels.</p></div>
                <div className="feature-grid service-marketing-grid">
                    {disciplines.map((discipline) => <article className="surface-card" key={discipline.title}><span className="service-icon" aria-hidden="true"><Icon name={discipline.icon} size={23} color="var(--color-green)" /></span><h3>{discipline.title}</h3><p className="service-full-name">{discipline.name}</p><p>{discipline.description}</p><ul className="detail-list">{discipline.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
                </div>
            </div>
        </section>
        <section className="section" aria-labelledby="marketing-focus">
            <div className="container">
                <div className="service-section-intro"><p className="eyebrow">A practical focus</p><h2 className="section-heading" id="marketing-focus">Visibility with a purpose.</h2><p className="section-description">The goal is a website that brings the right visitors closer to your business.</p></div>
                <div className="feature-grid">
                    <article className="surface-card"><span className="service-metric-word">Relevance</span><h3>Reach the right audience</h3><p>Shape your content around the questions and intentions behind real customer enquiries.</p></article>
                    <article className="surface-card"><span className="service-metric-word">Clarity</span><h3>Make your expertise clear</h3><p>Present services and business information in a consistent structure people and discovery tools can understand.</p></article>
                    <article className="surface-card"><span className="service-metric-word">Conversion</span><h3>Give visitors a next step</h3><p>Connect your visibility work with clear navigation, helpful content, and straightforward ways to enquire.</p></article>
                </div>
            </div>
        </section>
        <section className="section section-tinted" aria-labelledby="marketing-website">
            <div className="container">
                <div className="service-section-intro"><p className="eyebrow">Connected to your website</p><h2 className="section-heading" id="marketing-website">Good marketing needs a good home.</h2><p className="section-description">A fast, structured, and readable website is the foundation. Modern marketing is part of our Websites service, so the content and the experience can work together.</p><Link className="service-inline-link" to="/website">Explore website design & development <span aria-hidden="true">↗</span></Link></div>
            </div>
        </section>
        <section className="section" aria-labelledby="marketing-next-step">
            <div className="container"><div className="contact-band"><div><p className="eyebrow">Start with your goals</p><h2 id="marketing-next-step">Make your business easier to discover.</h2><p>Let’s talk about your audience, your website, and where you want your business to be found.</p></div><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Talk to our team <span aria-hidden="true">↗</span></a></div></div>
        </section>
    </div>
);

export default Marketing;
