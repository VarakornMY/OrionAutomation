import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { business } from '../data/business';
import Reveal from '../components/effects/Reveal';
import { TypingAnimation } from '../components/effects/TypingAnimation';
import Text3DFlip from '../components/effects/Text3DFlip';
import { useSiteMotion } from '../components/effects/MotionPreferences';
import '../styles/home.css';

const services = [
    { title: 'Websites', path: '/website', link: 'Website packages', description: 'A considered first impression. Built around your business, made for every screen.', items: ['Custom design', 'Online stores', 'Content & SEO'], icon: 'website' },
    { title: 'Automation', path: '/ai-automation', link: 'Automation packages', description: 'Less repetition. More room to work. Connect the tools your team already uses.', items: ['Connected tools', 'Workflows', 'Internal systems'], icon: 'automation' },
    { title: 'AI chatbots', path: '/ai-chatbot', link: 'Chatbot plans', description: 'Keep the conversation going, from the first question to the next appointment.', items: ['Customer enquiries', 'Bookings', 'CRM follow-up'], icon: 'chat' },
    { title: 'Search marketing', path: '/marketing', link: 'Search marketing services', description: 'Help the right people find you, through search engines and AI-powered answers.', items: ['Technical SEO', 'Answer engines', 'Content strategy'], icon: 'search' },
];
function ServiceIcon({ type }) {
    return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        {type === 'website' && <><rect x="6" y="8" width="28" height="24" rx="4" /><path d="M6 15h28M12 11.5h1m3 0h1M13 21h14M13 26h8" /></>}
        {type === 'automation' && <><rect x="5" y="6" width="11" height="11" rx="3" /><rect x="24" y="23" width="11" height="11" rx="3" /><path d="M16 11h8a5 5 0 0 1 5 5v7M24 29h-8a5 5 0 0 1-5-5v-7" /></>}
        {type === 'chat' && <><path d="M10 8h20a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5H18l-9 5v-6a5 5 0 0 1-4-5V13a5 5 0 0 1 5-5Z" /><path d="M12 17h16M12 23h10" /></>}
        {type === 'search' && <><circle cx="18" cy="17" r="10" /><path d="m25 25 9 9M12 20l4-4 4 2 4-6" /></>}
    </svg>;
}
export default function Home() {
    const { enabled } = useSiteMotion();
    return <div className="home-page">
        <SEO title="Websites & automation" description={business.description} canonical="/" />
        <section className="studio-hero">
            <div className="container studio-hero-layout">
                <div className="hero-copy">
                    <h1 aria-label="Websites & automation.">
                        <span className="hero-typing-line" aria-hidden="true"><span className="typing-placeholder">Websites &</span>{enabled ? <TypingAnimation className="hero-typed" duration={85} showCursor={false} startOnView={false}>Websites &</TypingAnimation> : <span className="hero-typed">Websites &</span>}</span>
                        {enabled ? <Text3DFlip as="span" className="hero-flip" rotateDirection="top" staggerDuration={0.035}>automation.</Text3DFlip> : <span className="hero-flip">automation.</span>}
                    </h1>
                    <p>Thoughtfully built websites. Seamlessly connected tools.<br className="desktop-break" /> More space for the work that matters.</p>
                    <div className="studio-actions"><Link className="button button-primary" to="/contact">Start a project</Link><a className="button button-secondary" href="#services">Explore services</a></div>
                </div>
                <div className="hero-art" aria-hidden="true"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-brand-glass"><div className="brand-art-line" /><img src="/brand/orion-logo.jpg" alt="" width="500" height="500" /><span>Ideas, connected.</span><div className="brand-art-dots"><i /><i /><i /></div></div><span className="orbit-label label-web">Websites</span><span className="orbit-label label-auto">Automation</span></div>
            </div>
            <div className="container hero-bottom"><span>Built for your business.</span><a href="#services">Discover what we do<span className="scroll-line" aria-hidden="true" /></a><span>Based in Malaysia</span></div>
        </section>
        <section className="studio-services container" id="services" aria-labelledby="services-title">
            <Reveal><div className="section-intro"><h2 id="services-title">A better way<br /><span>to do business.</span></h2><p>From your online presence to the systems behind it. Choose what you need; we’ll connect the pieces.</p></div></Reveal>
            <Reveal className="service-directory" stagger={0.1}>{services.map((service, index) => <article className="service-entry" key={service.path}><div className="service-card-top"><span className="service-icon"><ServiceIcon type={service.icon} /></span><span className="service-number">0{index + 1}</span></div><h3><Link to={service.path}>{service.title}</Link></h3><p>{service.description}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><Link to={service.path} className="text-link">{service.link}</Link></article>)}</Reveal>
        </section>
        <section className="studio-process container" aria-labelledby="process-title"><Reveal><div className="process-layout"><div className="process-heading"><h2 id="process-title">Good work.<br /><span>Clear process.</span></h2><Link className="text-link" to="/about-us">Get to know Orion</Link></div><ol className="process-steps"><li><span>01</span><div><h3>Start with a conversation</h3><p>Tell us what you need, what slows you down, and which tools you use.</p></div></li><li><span>02</span><div><h3>Make a clear plan</h3><p>Agree on deliverables, timelines, and costs before the work begins.</p></div></li><li><span>03</span><div><h3>Build, review, launch</h3><p>Review the work together, then hand over with the support in your project scope.</p></div></li></ol></div></Reveal></section>
        <section className="studio-questions container" aria-labelledby="questions-title"><Reveal><div className="questions-layout"><h2 id="questions-title">A few things<br /><span>you might ask.</span></h2><div className="studio-question-list">
            <details><summary>How much does a project cost?<span className="disclosure-mark" aria-hidden="true" /></summary><div className="question-answer"><p>Our <Link to="/website">website packages</Link> and <Link to="/ai-automation">automation packages</Link> list starting prices and inclusions. We’ll confirm the scope with you before work begins.</p></div></details>
            <details><summary>Can you work with our existing tools?<span className="disclosure-mark" aria-hidden="true" /></summary><div className="question-answer"><p>We work with CRMs, calendars, email, and spreadsheets. We’ll check your current setup and the available integrations first.</p></div></details>
            <details><summary>How do we start?<span className="disclosure-mark" aria-hidden="true" /></summary><div className="question-answer"><p>Send us a message about your business and what you need. We’ll discuss the work, the scope, and the next steps.</p></div></details>
        </div></div></Reveal></section>
        <section className="container studio-contact" aria-labelledby="contact-title"><Reveal><div className="studio-contact-panel"><div><h2 id="contact-title">Let’s make<br /><span>something work.</span></h2><p>Your next website. A smoother workflow. It starts here.</p></div><div className="contact-panel-actions"><Link className="button button-primary" to="/contact">Let’s talk about your project</Link><a className="text-link" href={`mailto:${business.email}`}>Email Orion</a></div></div></Reveal></section>
    </div>;
}
