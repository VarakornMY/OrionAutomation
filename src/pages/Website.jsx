import React from 'react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import Icon from '../components/Icons';
import SEO from '../components/SEO';
import '../styles/services.css';

const Website = () => {
    const packages = [
        {
            title: 'Standard Digital Presence',
            price: 'RM 2,999',
            setupFee: 'Timeline: 2-3 weeks',
            features: [
                'Bespoke Visual Design',
                'Up to 5 Strategic Pages',
                'Intelligent Responsiveness',
                'Performance Optimization',
                'Basic SEO Setup',
                'Contact Form Integration',
                '1 Month Support'
            ]
        },
        {
            title: 'Business Digital Experience',
            price: 'RM 5,999',
            setupFee: 'Timeline: 4-6 weeks',
            isPopular: true,
            features: [
                'Everything in Standard',
                'Up to 10 Pages',
                'Advanced Interactive Features',
                'CMS Integration (Blog/News)',
                'Advanced SEO Strategy',
                'Social Media Integration',
                'Google Analytics Setup',
                '3 Months Premium Support'
            ]
        },
        {
            title: 'E-Commerce Ecosystem',
            price: 'RM 8,999+',
            setupFee: 'Timeline: 8-12 weeks',
            features: [
                'Everything in Business',
                'Unlimited Pages',
                'Full E-commerce Functionality',
                'Payment Gateway Integration',
                'Product Management System',
                'User Accounts & Login',
                'Advanced Analytics Dashboard',
                '6 Months Premium Support',
                'Dedicated Project Manager'
            ]
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Website Development",
        "provider": {
            "@type": "Organization",
            "name": "Orion Automation"
        },
        "areaServed": "Malaysia",
        "description": "Stunning, high-performance websites designed to convert. Custom design, mobile-first, and SEO ready.",
        "offers": {
            "@type": "Offer",
            "price": "2999",
            "priceCurrency": "MYR"
        }
    };

    return (
        <div className="page-shell service-page">
            <SEO title="Website Design & Development" description="Thoughtfully designed, responsive websites for Malaysian businesses. Explore custom business websites, e-commerce development, and ongoing support." keywords="website development, web design, custom website, e-commerce, SEO, mobile responsive, Malaysia" canonical="/website" structuredData={structuredData} />
            <section className="page-hero"><div className="container"><nav className="service-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span>Websites</span></nav><div className="service-hero-grid"><div><p className="eyebrow">Website design & development</p><h1 className="page-title">Your business.<br />A stronger first impression.</h1><p className="page-description">A website should make your business easy to understand and simple to choose. We design clear, responsive experiences that guide visitors from their first look to their next step.</p><div className="service-actions"><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss your website <span aria-hidden="true">↗</span></a><Link className="button button-secondary" to="/website-portfolio">Explore our work</Link></div><p className="service-hero-note">Custom design. Considered details. A clear path forward.</p></div><aside className="service-summary"><p className="eyebrow">More than a good-looking page</p><h2>Designed around the people who use it.</h2><div className="workflow-preview">{[['01', 'A clear introduction', 'Show what you do and why it matters.'], ['02', 'An effortless experience', 'Make navigation work on any screen.'], ['03', 'A useful next step', 'Help customers enquire, book, or buy.']].map(([number, title, description]) => <div className="workflow-preview-item" key={number}><span className="step-count" aria-hidden="true">{number}</span><div><strong>{title}</strong><small>{description}</small></div></div>)}</div><Link className="service-inline-link" to="/website-portfolio">View selected projects <span aria-hidden="true">↗</span></Link></aside></div></div></section>
            <section className="section section-tinted" aria-labelledby="website-foundation"><div className="container"><div className="service-section-intro"><p className="eyebrow">A solid foundation</p><h2 className="section-heading" id="website-foundation">Every detail has a job to do.</h2><p className="section-description">We bring design and development together, so your website feels coherent from the first page to the final interaction.</p></div><div className="feature-grid">{[['design', 'Design that fits your business', 'A bespoke visual direction and a clear content hierarchy that help people understand your story.'], ['website', 'Comfortable on every screen', 'Responsive layouts, readable content, and navigation that feels natural on mobile and desktop.'], ['search', 'Built with growth in mind', 'SEO foundations, performance optimisation, and the integrations your business needs next.']].map(([icon, title, description]) => <article className="surface-card" key={title}><span className="service-icon" aria-hidden="true"><Icon name={icon} size={23} color="#244d43" /></span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
            <section className="section" aria-labelledby="website-related"><div className="container"><div className="service-section-intro"><p className="eyebrow">A connected experience</p><h2 className="section-heading" id="website-related">Make your website work harder.</h2><p className="section-description">Bring customer conversations and discoverability into the same digital experience.</p></div><div className="feature-grid" data-columns="2"><article className="surface-card"><span className="service-icon" aria-hidden="true"><Icon name="chatbot" size={23} color="#244d43" /></span><h3>AI chatbot integration</h3><p>Support enquiries, qualify leads, and organise appointments with a website assistant, with optional connections to WhatsApp, Messenger, and Instagram.</p><Link className="service-inline-link" to="/ai-chatbot">Explore AI chatbots <span aria-hidden="true">↗</span></Link></article><article className="surface-card"><span className="service-icon" aria-hidden="true"><Icon name="marketing" size={23} color="#244d43" /></span><h3>Modern marketing</h3><p>Build a fast, structured presence that can be discovered through traditional search, answer engines, and generative AI.</p><Link className="service-inline-link" to="/marketing">Explore modern marketing <span aria-hidden="true">↗</span></Link></article></div></div></section>
            <section className="section section-tinted" aria-labelledby="website-process"><div className="container"><div className="service-section-intro"><p className="eyebrow">From idea to launch</p><h2 className="section-heading" id="website-process">A clear process. No guesswork.</h2></div><ol className="service-process">{[['Discovery', 'We learn about your business, goals, and audience before defining the scope.'], ['Design', 'Review custom mockups and prototypes before development begins.'], ['Development', 'We build the agreed experience with responsive, maintainable code.'], ['Launch & support', 'We handle deployment and provide the support included in your package.']].map(([title, description], index) => <li key={title}><span className="process-count" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></div></section>
            <section className="section" id="website-pricing" aria-labelledby="website-pricing-heading"><div className="container"><div className="service-section-intro"><p className="eyebrow">Find your fit</p><h2 className="section-heading" id="website-pricing-heading">Website packages.</h2><p className="section-description">A starting point for your scope, with clear inclusions and an estimated delivery timeline.</p></div><div className="pricing-grid">{packages.map((pkg) => <PricingCard key={pkg.title} {...pkg} period="" />)}</div></div></section>
            <section className="section" aria-labelledby="website-next-step"><div className="container"><div className="contact-band"><div><p className="eyebrow">Start with a conversation</p><h2 id="website-next-step">A website your business can grow with.</h2><p>Tell us what you’re building. We’ll help shape the right scope, direction, and next steps.</p></div><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Talk to our team <span aria-hidden="true">↗</span></a></div></div></section>
        </div>
    );
};

export default Website;
