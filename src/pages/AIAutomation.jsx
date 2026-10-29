import React from 'react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import Icon from '../components/Icons';
import SEO from '../components/SEO';
import '../styles/services.css';

const AIAutomation = () => {
    const pillars = [
        {
            icon: 'sync',
            title: 'Automation Workflow',
            description:
                'End-to-end workflows that connect your tools, eliminate manual handoffs, and run 24/7. From lead capture to fulfillment, every step is orchestrated.',
            highlights: [
                'Multi-step workflow design',
                'Cross-platform integrations (CRM, email, sheets, payments)',
                'Conditional logic, branching, and human-in-the-loop',
                'Real-time triggers and scheduled jobs'
            ]
        },
        {
            icon: 'chart',
            title: 'Pipeline Automation',
            description:
                'Automated data pipelines that move, transform, and enrich information across your stack. Reliable, observable, and built to scale with your business.',
            highlights: [
                'ETL / ELT pipelines (APIs, databases, files)',
                'Lead and sales pipeline automation',
                'Data enrichment and deduplication',
                'Monitoring, retries, and error alerting'
            ]
        },
        {
            icon: 'code',
            title: 'Production Internal System Automation',
            description:
                'Automate the systems your team actually runs production on — inventory, ops, finance, HR, support. Replace repetitive internal tasks with reliable software.',
            highlights: [
                'Internal dashboards and admin tools',
                'Inventory, ops, and approval workflows',
                'Document generation and reporting',
                'Role-based access and audit trails'
            ]
        }
    ];

    const plans = [
        {
            title: 'Starter Automation',
            price: 'RM 1,499',
            setupFee: 'Setup: from RM 999',
            features: [
                '1 Core Workflow (up to 5 steps)',
                'Integrate up to 3 tools/APIs',
                'Trigger-based execution',
                'Basic error logging',
                '1 Month Support'
            ]
        },
        {
            title: 'Pipeline Pro',
            price: 'RM 2,999',
            setupFee: 'Setup: from RM 1,999',
            isPopular: true,
            features: [
                'Up to 3 Workflows / Pipelines',
                'Integrate up to 8 tools/APIs',
                'Scheduled + real-time triggers',
                'Data transformation & enrichment',
                'Monitoring dashboard & alerts',
                '3 Months Premium Support'
            ]
        },
        {
            title: 'Production Systems',
            price: 'RM 5,999+',
            setupFee: 'Setup: Custom Scope',
            features: [
                'Unlimited workflows / pipelines',
                'Custom internal tools & dashboards',
                'Role-based access & audit logs',
                'Full integration with internal systems',
                'SLA-backed monitoring',
                'Dedicated automation engineer',
                '6 Months Premium Support'
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
            'AI-powered automation workflows, data pipeline automation, and production internal system automation for modern businesses.',
        offers: {
            '@type': 'Offer',
            price: '1499',
            priceCurrency: 'MYR'
        }
    };

    return (
        <div className="page-shell service-page">
            <SEO title="AI Automation Workflow" description="Connect your tools, simplify repetitive tasks, and build dependable workflows for your business." keywords="AI automation, workflow automation, pipeline automation, business process automation, Malaysia" canonical="/ai-automation" structuredData={structuredData} />
            <section className="page-hero">
                <div className="container">
                    <nav className="service-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span>AI automation</span></nav>
                    <div className="service-hero-grid">
                        <div>
                            <p className="eyebrow">AI automation</p>
                            <h1 className="page-title">Less busywork.<br />More room to grow.</h1>
                            <p className="page-description">Connect the tools your team already uses. We build workflows, data pipelines, and internal systems that turn repetitive work into a reliable process.</p>
                            <div className="service-actions"><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss your workflow <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#automation-pricing">Explore packages</a></div>
                            <p className="service-hero-note">Built around your process, not the other way around.</p>
                        </div>
                        <aside className="service-summary" aria-label="Example automated lead workflow">
                            <p className="eyebrow">A simpler way to work</p>
                            <h2>One enquiry. A connected process.</h2>
                            <div className="workflow-preview">
                                {[['01', 'Capture the enquiry', 'A customer submits your contact form.'], ['02', 'Organise the lead', 'Details move to your CRM or spreadsheet.'], ['03', 'Keep things moving', 'The right team receives a follow-up task.']].map(([number, title, description]) => <div className="workflow-preview-item" key={number}><span className="step-count" aria-hidden="true">{number}</span><div><strong>{title}</strong><small>{description}</small></div></div>)}
                            </div>
                            <p className="summary-footnote">Example workflow. The tools and steps are scoped to your business.</p>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="section section-tinted" aria-labelledby="automation-capabilities">
                <div className="container">
                    <div className="service-section-intro"><p className="eyebrow">What we build</p><h2 className="section-heading" id="automation-capabilities">Connect every part of the work.</h2><p className="section-description">Start with one time-consuming task, or bring together the systems your business depends on.</p></div>
                    <div className="feature-grid">{pillars.map((pillar) => <article className="surface-card" key={pillar.title}><span className="service-icon" aria-hidden="true"><Icon name={pillar.icon} size={23} color="#244d43" /></span><h3>{pillar.title}</h3><p>{pillar.description}</p><ul className="detail-list">{pillar.highlights.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
                </div>
            </section>
            <section className="section" aria-labelledby="automation-use-cases">
                <div className="container">
                    <div className="service-section-intro"><p className="eyebrow">Where it helps</p><h2 className="section-heading" id="automation-use-cases">Give your team time back.</h2></div>
                    <div className="feature-grid">{[['Ops & logistics', 'Connect order processing, inventory updates, and fulfilment status across your tools.'], ['Sales & CRM', 'Route new leads, organise follow-ups, and keep your sales pipeline up to date.'], ['Finance & reporting', 'Generate invoices, statements, and daily reports with fewer manual handoffs.']].map(([title, description]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
                </div>
            </section>
            <section className="section section-tinted" id="automation-pricing" aria-labelledby="automation-pricing-heading">
                <div className="container"><div className="service-section-intro"><p className="eyebrow">Clear starting points</p><h2 className="section-heading" id="automation-pricing-heading">Automation packages.</h2><p className="section-description">Choose the scale that fits today. We’ll confirm your integrations and scope before the project begins.</p></div><div className="pricing-grid">{plans.map((plan) => <PricingCard key={plan.title} {...plan} />)}</div></div>
            </section>
            <section className="section" aria-labelledby="automation-next-step">
                <div className="container"><div className="contact-band"><div><p className="eyebrow">Your next step</p><h2 id="automation-next-step">Tell us what takes too much time.</h2><p>We’ll help you map the workflow and identify a practical place to start.</p></div><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Talk to our team <span aria-hidden="true">↗</span></a></div></div>
            </section>
        </div>
    );
};

export default AIAutomation;
