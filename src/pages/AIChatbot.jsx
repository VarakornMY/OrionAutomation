import React from 'react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import Icon from '../components/Icons';
import SEO from '../components/SEO';
import '../styles/services.css';

const AIChatbot = () => {
    const plans = [
        {
            title: 'Basic Plan',
            price: 'RM 399',
            setupFee: 'RM 499 (RM 0 for annual)',
            features: [
                '1 Platform (WhatsApp/Messenger/Instagram)',
                'Smart Chatbot (24/7)',
                'Auto Response for Common Enquiries',
                'Appointment Booking System',
                '1 Calendar for booking'
            ]
        },
        {
            title: 'Premium AI Automation',
            price: 'RM 699',
            setupFee: 'RM 999',
            isPopular: true,
            features: [
                'Up to 3 Platforms',
                'Everything in Basic',
                '3 AI Automation Workflows',
                '3 Calendars',
                'CRM Integration (Pipeline, Contact, Tags)'
            ]
        },
        {
            title: 'Complete Plan',
            price: 'RM 999',
            setupFee: 'RM 2,599',
            features: [
                'Up to 3 Platforms',
                'Everything in Premium',
                'Website + Live AI Chatbot Widget',
                'AI Voice Call (Phone Number)',
                '10 Calendar Integration',
                '10 Workflow Automations',
                'Monthly Chatbot Training (tone, flow, style)',
                'Monthly Email Marketing Automation',
                'Monthly Dashboard Insights'
            ]
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Chatbot Development",
        "provider": {
            "@type": "Organization",
            "name": "Orion Automation"
        },
        "areaServed": "Malaysia",
        "description": "Intelligent 24/7 customer support agents that learn and adapt. Automate customer conversations, bookings, and support across WhatsApp, Messenger, and Instagram.",
        "offers": {
            "@type": "Offer",
            "price": "399",
            "priceCurrency": "MYR"
        }
    };

    return (
        <div className="page-shell service-page">
            <SEO title="AI Chatbots" description="Support customer enquiries, bookings, and follow-ups across WhatsApp, Messenger, and Instagram with a chatbot built for your business." keywords="AI chatbot, WhatsApp chatbot, Messenger bot, Instagram automation, customer service automation, Malaysia" canonical="/ai-chatbot" structuredData={structuredData} />
            <section className="page-hero">
                <div className="container">
                    <nav className="service-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/website">Websites</Link><span aria-hidden="true">/</span><span>AI chatbots</span></nav>
                    <div className="service-hero-grid">
                        <div><p className="eyebrow">AI chatbots</p><h1 className="page-title">A better conversation starts here.</h1><p className="page-description">Help customers get answers, make bookings, and take the next step. Connect your website, WhatsApp, Messenger, and Instagram with support that works around the clock.</p><div className="service-actions"><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss your chatbot <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#chatbot-pricing">View plans</a></div><p className="service-hero-note">Answers, appointments, and follow-ups in one connected flow.</p></div>
                        <aside className="service-summary" aria-label="Illustrative chatbot conversation"><p className="eyebrow">Example conversation</p><div className="chat-example"><p className="chat-bubble visitor"><span className="chat-example-label">Customer</span>Hi, can I book an appointment?</p><p className="chat-bubble assistant"><span className="chat-example-label">Your assistant</span>Of course. Which service are you interested in?</p><p className="chat-bubble visitor"><span className="chat-example-label">Customer</span>I’d like a website consultation.</p></div><div className="service-capability-tags"><span>Answer enquiries</span><span>Capture leads</span><span>Organise bookings</span></div><p className="summary-footnote">Illustrative conversation. Your chatbot is configured for your services and booking process.</p></aside>
                    </div>
                </div>
            </section>
            <section className="section section-tinted" aria-labelledby="chatbot-features">
                <div className="container"><div className="service-section-intro"><p className="eyebrow">A useful first response</p><h2 className="section-heading" id="chatbot-features">Keep the conversation moving.</h2><p className="section-description">Give customers a clear answer without making your team reply to the same question all day.</p></div><div className="feature-grid" data-columns="2">{[['zap', 'Answer common enquiries', 'Provide a quick response to product questions, service enquiries, and frequently asked questions, even outside office hours.'], ['calendar', 'Make booking easier', 'Let customers arrange appointments through chat, with calendar integration and automated reminders.'], ['sync', 'Keep leads organised', 'Track conversations and pass contact details, tags, and follow-up tasks into your CRM.'], ['chatbot', 'Meet customers where they are', 'Connect WhatsApp, Messenger, Instagram, and your website according to your selected plan.']].map(([icon, title, description]) => <article className="surface-card" key={title}><span className="service-icon" aria-hidden="true"><Icon name={icon} size={23} color="#244d43" /></span><h3>{title}</h3><p>{description}</p></article>)}</div></div>
            </section>
            <section className="section" aria-labelledby="chatbot-use-cases"><div className="container"><div className="service-section-intro"><p className="eyebrow">Made for real enquiries</p><h2 className="section-heading" id="chatbot-use-cases">Fit the way your customers buy.</h2></div><div className="feature-grid">{[['Real estate', 'Qualify enquiries and help prospective buyers arrange property viewings.'], ['E-commerce', 'Answer product questions and help customers through the ordering process.'], ['Healthcare', 'Support appointment booking and send reminders for upcoming visits.']].map(([title, description]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
            <section className="section section-tinted" id="chatbot-pricing" aria-labelledby="chatbot-pricing-heading"><div className="container"><div className="service-section-intro"><p className="eyebrow">Choose your starting point</p><h2 className="section-heading" id="chatbot-pricing-heading">Chatbot plans.</h2><p className="section-description">From one messaging platform to a connected customer experience. Compare the inclusions, then discuss what your business needs.</p></div><div className="pricing-grid">{plans.map((plan) => <PricingCard key={plan.title} {...plan} />)}</div></div></section>
            <section className="section" aria-labelledby="chatbot-faq"><div className="container"><div className="service-section-intro"><p className="eyebrow">Before we begin</p><h2 className="section-heading" id="chatbot-faq">A few common questions.</h2></div><div className="service-faq"><details><summary>Which platforms can the chatbot connect to?</summary><p>Our plans support WhatsApp, Messenger, and Instagram. Website chatbot integration is also available. The number of connected platforms depends on your selected plan.</p></details><details><summary>Can it handle appointment bookings?</summary><p>Yes. Calendar integrations, appointment booking, and automated reminders can be included in your chatbot flow.</p></details><details><summary>How do I choose the right plan?</summary><p>Tell us where your enquiries come from and which tasks your team repeats most often. We’ll help you choose the platforms and workflows to include.</p></details></div></div></section>
            <section className="section" aria-labelledby="chatbot-next-step"><div className="container"><div className="contact-band"><div><p className="eyebrow">Let’s plan your assistant</p><h2 id="chatbot-next-step">Make every first response count.</h2><p>Tell us about your customers, your platforms, and the conversations you want to improve.</p></div><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Talk to our team <span aria-hidden="true">↗</span></a></div></div></section>
        </div>
    );
};

export default AIChatbot;
