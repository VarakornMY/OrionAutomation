import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/supporting.css';

export default function AboutUs() {
    return (
        <div className="page-shell about-page">
            <SEO title="About Orion Automation" description="We help businesses simplify their operations with thoughtful websites, automation and digital marketing." canonical="/about-us" />
            <section className="page-hero container"><h1 className="page-title">About Orion</h1></section>
            <section className="section container about-layout">
                <div className="about-copy">
                    <p>Orion Automation helps businesses with websites, workflow automation, AI chatbots and digital marketing.</p>
                    <p>We start by understanding how your business works, where customers need help and which tasks take up your team's time. That gives each project a clear purpose and scope.</p>
                    <a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss a project</a>
                </div>
                <div className="about-services">
                    <h2>Services</h2>
                    <ul>
                        <li><Link to="/website">Website development</Link></li>
                        <li><Link to="/ai-automation">AI automation</Link></li>
                        <li><Link to="/ai-chatbot">AI chatbots</Link></li>
                        <li><Link to="/marketing">Digital marketing</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
