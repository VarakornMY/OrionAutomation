import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/supporting.css';

export default function AboutUs() {
    return (
        <div className="page-shell about-page">
            <SEO title="About Orion Automation" description="We help businesses simplify their operations with thoughtful websites, automation and digital marketing." canonical="/about-us" />
            <section className="page-hero container"><p className="eyebrow">About Orion</p><h1 className="page-title">Technology that makes<br />business feel simpler.</h1><p className="page-description">We bring websites, automation and digital marketing together to help businesses spend less time on repetitive work and more time on what matters.</p></section>
            <section className="section container about-layout"><div><p className="eyebrow">Our approach</p><h2>Start with the business.<br />Build with purpose.</h2></div><div><p>Good technology should serve a clear purpose. We take time to understand how your business works, where your customers need help and what your team wants to improve.</p><p>From a new website to a connected workflow, our focus is on practical solutions that are clear to use and easy to build on.</p><Link className="button button-secondary" to="/ai-automation">Explore our services <span aria-hidden="true">↗</span></Link></div></section>
            <section className="section container"><div className="feature-grid">{[{n:'01',title:'Clarity first',text:'A clear scope, understandable design and straightforward communication.'},{n:'02',title:'Useful by design',text:'Thoughtful experiences that help customers and make everyday work easier.'},{n:'03',title:'Room to grow',text:'Solutions shaped around the way your business works today and where it wants to go.'}].map(item=><article className="surface-card about-value" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
        </div>
    );
}
