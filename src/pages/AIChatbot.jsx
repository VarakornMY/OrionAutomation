import React from 'react';
import PricingCard from '../components/PricingCard';
import SEO from '../components/SEO';
import '../styles/services.css';

const AIChatbot = () => {
    const plans = [
        {
            title: 'Basic',
            price: 'RM 399',
            setupFee: 'RM 499 (RM 0 for annual)',
            features: [
                '1 platform: WhatsApp, Messenger, or Instagram',
                '24/7 chatbot',
                'Automatic answers to common questions',
                'Appointment booking',
                '1 booking calendar'
            ]
        },
        {
            title: 'Premium',
            price: 'RM 699',
            setupFee: 'RM 999',
            isPopular: true,
            features: [
                'Up to 3 platforms',
                'Everything in Basic',
                '3 AI automation workflows',
                '3 calendars',
                'CRM integration: pipelines, contacts, and tags'
            ]
        },
        {
            title: 'Complete',
            price: 'RM 999',
            setupFee: 'RM 2,599',
            features: [
                'Up to 3 platforms',
                'Everything in Premium',
                'Website with a live AI chatbot',
                'AI voice calls with a phone number',
                '10 calendar integrations',
                '10 automated workflows',
                'Monthly chatbot training: tone, flow, and style',
                'Monthly email marketing automation',
                'Monthly dashboard reports'
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
        "description": "Chatbots for customer enquiries, bookings, and follow-ups on WhatsApp, Messenger, and Instagram.",
        "offers": {
            "@type": "Offer",
            "price": "399",
            "priceCurrency": "MYR"
        }
    };

    return (
        <div className="page-shell service-page">
            <SEO title="AI Chatbots" description="Chatbots for customer enquiries, bookings, and follow-ups across WhatsApp, Messenger, Instagram, and your website." canonical="/ai-chatbot" structuredData={structuredData} />
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">AI chatbots</h1>
                    <div className="service-actions">
                        <a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss a chatbot</a>
                        <a className="button button-secondary" href="#chatbot-pricing">Plans</a>
                    </div>
                </div>
            </section>
            <section className="section" aria-labelledby="chatbot-features">
                <div className="container">
                    <h2 className="section-heading" id="chatbot-features">Features</h2>
                    <div className="feature-grid" data-columns="2">
                        {[
                            ['Customer enquiries', 'Answer product and service questions outside office hours.'],
                            ['Appointments', 'Arrange bookings through chat, with calendar integration and automated reminders.'],
                            ['CRM integration', 'Pass contact details, tags, and follow-up tasks from conversations into your CRM.'],
                            ['Messaging platforms', 'Connect WhatsApp, Messenger, Instagram, and your website according to your selected plan.']
                        ].map(([title, description]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}
                    </div>
                </div>
            </section>
            <section className="section" aria-labelledby="chatbot-use-cases">
                <div className="container">
                    <h2 className="section-heading" id="chatbot-use-cases">Applications</h2>
                    <div className="feature-grid">
                        {[
                            ['Real estate', 'Qualify enquiries and help prospective buyers arrange property viewings.'],
                            ['E-commerce', 'Answer product questions and help customers through the ordering process.'],
                            ['Healthcare', 'Support appointment booking and send reminders for upcoming visits.']
                        ].map(([title, description]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}
                    </div>
                </div>
            </section>
            <section className="section" id="chatbot-pricing" aria-labelledby="chatbot-pricing-heading">
                <div className="container">
                    <h2 className="section-heading" id="chatbot-pricing-heading">Plans</h2>
                    <div className="pricing-grid">{plans.map((plan) => <PricingCard key={plan.title} {...plan} />)}</div>
                </div>
            </section>
            <section className="section" aria-labelledby="chatbot-faq">
                <div className="container">
                    <h2 className="section-heading" id="chatbot-faq">Questions</h2>
                    <div className="service-faq">
                        <details><summary>Which platforms can the chatbot connect to?</summary><div className="faq-answer"><p>Our plans support WhatsApp, Messenger, and Instagram. Website chatbot integration is also available. The number of connected platforms depends on your selected plan.</p></div></details>
                        <details><summary>Can it handle appointment bookings?</summary><div className="faq-answer"><p>Yes. Calendar integrations, appointment booking, and automated reminders can be included in your chatbot flow.</p></div></details>
                        <details><summary>How do I choose the right plan?</summary><div className="faq-answer"><p>Tell us where your enquiries come from and which tasks your team repeats most often. We will help you choose the platforms and workflows to include.</p></div></details>
                    </div>
                </div>
            </section>
            <section className="section" aria-labelledby="chatbot-next-step">
                <div className="container"><div className="contact-band"><h2 id="chatbot-next-step">Discuss your chatbot</h2><a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Contact Orion</a></div></div>
            </section>
        </div>
    );
};

export default AIChatbot;
