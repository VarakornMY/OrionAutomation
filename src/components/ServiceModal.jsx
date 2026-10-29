import React from 'react';
import { Link } from 'react-router-dom';
import AccessibleModal from './AccessibleModal';

export default function ServiceModal({ isOpen, onClose }) {
    const services = [
        { title: 'AI automation', description: 'Connect your tools and simplify repetitive work.', link: '/ai-automation' },
        { title: 'Website development', description: 'A thoughtful digital home for your business.', link: '/website' },
        { title: 'AI chatbots', description: 'Help customers find answers and take the next step.', link: '/ai-chatbot' },
        { title: 'Modern marketing', description: 'Help customers discover your business.', link: '/marketing' },
    ];
    return <AccessibleModal isOpen={isOpen} onClose={onClose} titleId="services-dialog-title"><p className="eyebrow">What we do</p><h2 id="services-dialog-title">Find your starting point.</h2><div className="service-choice-list">{services.map(service=><Link to={service.link} onClick={onClose} key={service.link}><div><h3>{service.title}</h3><p>{service.description}</p></div><span aria-hidden="true">↗</span></Link>)}</div></AccessibleModal>;
}
