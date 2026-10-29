import React from 'react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import SEO from '../components/SEO';
import '../styles/services.css';

const Website = () => {
    const packages = [
        {
            title: 'Standard website',
            price: 'RM 2,999',
            setupFee: 'Timeline: 2-3 weeks',
            features: [
                'Custom design',
                'Up to 5 pages',
                'Mobile and desktop layouts',
                'Page speed optimisation',
                'Basic SEO setup',
                'Contact form',
                '1 month of support'
            ]
        },
        {
            title: 'Business website',
            price: 'RM 5,999',
            setupFee: 'Timeline: 4-6 weeks',
            isPopular: true,
            features: [
                'Everything in Standard website',
                'Up to 10 pages',
                'Custom interactive features',
                'Blog or news content management',
                'Advanced SEO planning',
                'Social media integration',
                'Google Analytics setup',
                '3 months of premium support'
            ]
        },
        {
            title: 'Online store',
            price: 'RM 8,999+',
            setupFee: 'Timeline: 8-12 weeks',
            features: [
                'Everything in Business website',
                'Unlimited pages',
                'Online shop features',
                'Payment gateway integration',
                'Product management',
                'Customer accounts and login',
                'Advanced analytics dashboard',
                '6 months of premium support',
                'Dedicated project manager'
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
        "description": "Custom business websites and online stores, with responsive design, SEO setup, and ongoing support.",
        "offers": {
            "@type": "Offer",
            "price": "2999",
            "priceCurrency": "MYR"
        }
    };

    return (
        <div className="page-shell service-page">
            <SEO title="Website Design & Development" description="Custom business websites and e-commerce development for Malaysian businesses." canonical="/website" structuredData={structuredData} />
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Websites</h1>
                    <div className="service-actions">
                        <a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss a website</a>
                        <a className="button button-secondary" href="#website-pricing">Packages</a>
                    </div>
                </div>
            </section>
            <section className="section" aria-labelledby="website-foundation">
                <div className="container">
                    <h2 className="section-heading" id="website-foundation">Design & development</h2>
                    <div className="feature-grid">
                        {[
                            ['Custom design', 'Layouts, typography, and content structure designed for your business.'],
                            ['Mobile & desktop', 'Responsive pages with readable content and navigation that works across screen sizes.'],
                            ['Performance & search', 'Page speed, SEO foundations, and the integrations your website needs.']
                        ].map(([title, description]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}
                    </div>
                </div>
            </section>
            <section className="section" aria-labelledby="website-related">
                <div className="container">
                    <h2 className="section-heading" id="website-related">Integrations</h2>
                    <div className="feature-grid" data-columns="2">
                        <article className="surface-card"><h3>AI chatbots</h3><p>Handle enquiries and appointments through your website, with optional connections to WhatsApp, Messenger, and Instagram.</p><Link className="service-inline-link" to="/ai-chatbot">Chatbot plans</Link></article>
                        <article className="surface-card"><h3>Search & marketing</h3><p>Technical SEO and structured content for search engines, answer engines, and generative AI.</p><Link className="service-inline-link" to="/marketing">Marketing services</Link></article>
                    </div>
                </div>
            </section>
            <section className="section" aria-labelledby="website-process">
                <div className="container">
                    <h2 className="section-heading" id="website-process">Process</h2>
                    <ol className="service-process">
                        {[
                            ['Discovery', 'We agree on your goals, audience, and scope.'],
                            ['Design', 'You review mockups and prototypes before development.'],
                            ['Development', 'We build and test your website on mobile and desktop.'],
                            ['Launch & support', 'We handle deployment and the support included in your package.']
                        ].map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}
                    </ol>
                </div>
            </section>
            <section className="section" id="website-pricing" aria-labelledby="website-pricing-heading">
                <div className="container">
                    <h2 className="section-heading" id="website-pricing-heading">Packages</h2>
                    <div className="pricing-grid">{packages.map((pkg) => <PricingCard key={pkg.title} {...pkg} period="" />)}</div>
                </div>
            </section>
            <section className="section" aria-labelledby="website-next-step">
                <div className="container"><div className="contact-band"><h2 id="website-next-step">Discuss your website</h2><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Contact Orion</a></div></div>
            </section>
        </div>
    );
};

export default Website;
