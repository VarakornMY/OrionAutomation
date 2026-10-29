import React from 'react';
import PricingCard from '../components/PricingCard';
import SEO from '../components/SEO';
import '../styles/services.css';

const AIAutomation = () => {
    const pillars = [
        {
            title: 'Workflow automation',
            description:
                'Connect your CRM, email, spreadsheets, and other tools to handle recurring tasks and handoffs.',
            highlights: [
                'Multi-step workflow design',
                'Connect CRM, email, spreadsheets, and payments',
                'Conditional steps, branching, and manual approvals',
                'Real-time triggers and scheduled jobs'
            ]
        },
        {
            title: 'Data pipelines',
            description:
                'Move and transform data between APIs, databases, and files, with monitoring and error alerts.',
            highlights: [
                'Data pipelines for APIs, databases, and files',
                'Lead and sales pipeline automation',
                'Add missing data and remove duplicates',
                'Monitoring, retries, and error alerts'
            ]
        },
        {
            title: 'Internal systems',
            description:
                'Build internal tools for inventory, operations, finance, HR, and support, with permissions and audit records.',
            highlights: [
                'Internal dashboards and admin tools',
                'Inventory, operations, and approval workflows',
                'Document generation and reporting',
                'Role-based access and audit trails'
            ]
        }
    ];

    const plans = [
        {
            title: 'Starter automation',
            price: 'RM 1,499',
            setupFee: 'Setup: from RM 999',
            features: [
                '1 workflow with up to 5 steps',
                'Connect up to 3 tools or APIs',
                'Runs when an event occurs',
                'Basic error logging',
                '1 month of support'
            ]
        },
        {
            title: 'Workflows & pipelines',
            price: 'RM 2,999',
            setupFee: 'Setup: from RM 1,999',
            isPopular: true,
            features: [
                'Up to 3 workflows or pipelines',
                'Connect up to 8 tools or APIs',
                'Scheduled and real-time triggers',
                'Data transformation and enrichment',
                'Monitoring dashboard and alerts',
                '3 months of premium support'
            ]
        },
        {
            title: 'Production systems',
            price: 'RM 5,999+',
            setupFee: 'Setup: custom scope',
            features: [
                'Unlimited workflows and pipelines',
                'Custom internal tools and dashboards',
                'Role-based access and audit logs',
                'Integration with your internal systems',
                'Monitoring with a service-level agreement',
                'Dedicated automation engineer',
                '6 months of premium support'
            ]
        }
    ];

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'AI Automation Workflow',
        provider: {
            '@type': 'Organization',
            name: 'Orion Automation'
        },
        areaServed: 'Malaysia',
        description:
            'Workflow automation, data pipelines, and internal systems for businesses.',
        offers: {
            '@type': 'Offer',
            price: '1499',
            priceCurrency: 'MYR'
        }
    };

    return (
        <div className="page-shell service-page">
            <SEO title="Business Automation" description="Workflow automation, data pipelines, and internal systems for Malaysian businesses." canonical="/ai-automation" structuredData={structuredData} />
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Business automation</h1>
                    <div className="service-actions">
                        <a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss a project</a>
                        <a className="button button-secondary" href="#automation-pricing">Packages</a>
                    </div>
                </div>
            </section>
            <section className="section" aria-labelledby="automation-capabilities">
                <div className="container">
                    <h2 className="section-heading" id="automation-capabilities">Services</h2>
                    <div className="feature-grid">
                        {pillars.map((pillar) => (
                            <article className="surface-card" key={pillar.title}>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                                <ul className="detail-list">{pillar.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section" aria-labelledby="automation-use-cases">
                <div className="container">
                    <h2 className="section-heading" id="automation-use-cases">Applications</h2>
                    <div className="feature-grid">
                        {[
                            ['Operations & logistics', 'Connect order processing, inventory updates, and fulfilment status across your tools.'],
                            ['Sales & CRM', 'Route new leads, organise follow-ups, and keep your sales pipeline up to date.'],
                            ['Finance & reporting', 'Generate invoices, statements, and daily reports with fewer manual handoffs.']
                        ].map(([title, description]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}
                    </div>
                </div>
            </section>
            <section className="section" id="automation-pricing" aria-labelledby="automation-pricing-heading">
                <div className="container">
                    <h2 className="section-heading" id="automation-pricing-heading">Packages</h2>
                    <div className="pricing-grid">{plans.map((plan) => <PricingCard key={plan.title} {...plan} />)}</div>
                </div>
            </section>
            <section className="section" aria-labelledby="automation-next-step">
                <div className="container"><div className="contact-band"><h2 id="automation-next-step">Discuss your workflow</h2><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Contact Orion</a></div></div>
            </section>
        </div>
    );
};

export default AIAutomation;
