import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { business } from '../data/business';
import '../styles/home.css';

const services = [
    { title: 'Websites', path: '/website', link: 'Website packages', items: ['Custom design', 'Mobile layouts', 'Content and SEO setup'] },
    { title: 'Automation', path: '/ai-automation', link: 'Automation packages', items: ['Workflow design', 'Connected tools', 'Internal systems'] },
    { title: 'AI chatbots', path: '/ai-chatbot', link: 'Chatbot plans', items: ['Customer enquiries', 'Appointment booking', 'CRM follow-up'] },
    { title: 'Search marketing', path: '/marketing', link: 'Search marketing services', items: ['Technical SEO', 'Answer engine optimisation', 'Generative search'] },
];

function moveLogo(event) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();
    element.style.setProperty('--turn-x', `${((event.clientY - bounds.top) / bounds.height - .5) * -8}deg`);
    element.style.setProperty('--turn-y', `${((event.clientX - bounds.left) / bounds.width - .5) * 8}deg`);
}

function resetLogo(event) {
    event.currentTarget.style.setProperty('--turn-x', '0deg');
    event.currentTarget.style.setProperty('--turn-y', '0deg');
}

export default function Home() {
    const [activeService, setActiveService] = useState(null);
    return (
        <div className="home-page">
            <SEO title="Websites & automation" description={business.description} canonical="/" />
            <section className="studio-hero">
                <div className="container studio-hero-layout">
                    <div>
                        <h1>Websites &<br /><em>automation.</em></h1>
                        <div className="studio-actions">
                            <Link className="button button-primary" to="/contact">Start a project</Link>
                            <a className="text-link" href="#services">Services</a>
                        </div>
                    </div>
                    <div className="studio-logo-stage" aria-hidden="true" onPointerMove={moveLogo} onPointerLeave={resetLogo}>
                        <img src="/brand/orion-logo.jpg" alt="" width="500" height="500" draggable="false" />
                    </div>
                </div>
            </section>

            <section className="studio-services container" id="services" aria-labelledby="services-title">
                <h2 className="studio-section-title" id="services-title">Services</h2>
                <div className="service-directory">
                    {services.map((service, index) => {
                        const open = activeService === index;
                        return <div className={`service-entry ${open ? 'is-open' : ''}`} key={service.path}>
                            <h3>
                                <button type="button" className="service-entry-toggle" aria-expanded={open} aria-controls={`service-panel-${index}`} onClick={() => setActiveService(open ? null : index)}>
                                    <span>{service.title}</span>
                                    <span className="disclosure-mark" aria-hidden="true" />
                                </button>
                            </h3>
                            <div className="service-entry-panel" id={`service-panel-${index}`} aria-hidden={!open} inert={open ? undefined : ''}>
                                <div className="service-entry-clip"><div className="service-entry-content">
                                    <ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
                                    <Link to={service.path} className="text-link">{service.link}</Link>
                                </div></div>
                            </div>
                        </div>;
                    })}
                </div>
            </section>

            <section className="studio-questions container" aria-labelledby="questions-title">
                <h2 className="studio-section-title" id="questions-title">Questions</h2>
                <div className="studio-question-list">
                    <details><summary>How much does a project cost?<span className="disclosure-mark" aria-hidden="true" /></summary><div className="question-answer"><p>Our <Link to="/website">website packages</Link> and <Link to="/ai-automation">automation packages</Link> list starting prices and inclusions. We’ll confirm the scope with you before work begins.</p></div></details>
                    <details><summary>Can you work with our existing tools?<span className="disclosure-mark" aria-hidden="true" /></summary><div className="question-answer"><p>We work with CRMs, calendars, email, and spreadsheets. We’ll check your current setup and the available integrations first.</p></div></details>
                    <details><summary>How do we start?<span className="disclosure-mark" aria-hidden="true" /></summary><div className="question-answer"><p>Send us a message about your business and what you need. We’ll discuss the work, the scope, and the next steps.</p></div></details>
                </div>
            </section>

            <section className="studio-contact container" aria-labelledby="contact-title">
                <h2 id="contact-title">Let’s talk.</h2>
                <div><Link className="button button-primary" to="/contact">Contact Orion</Link><a className="text-link" href={`mailto:${business.email}`}>Email Orion</a></div>
            </section>
        </div>
    );
}
