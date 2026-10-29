import React from 'react';
import { Link } from 'react-router-dom';
import AccessibleModal from './AccessibleModal';

export default function ServiceModal({ isOpen, onClose }) {
    const services = [
        { title: 'AI automation', link: '/ai-automation' },
        { title: 'Website development', link: '/website' },
        { title: 'AI chatbots', link: '/ai-chatbot' },
        { title: 'Digital marketing', link: '/marketing' },
    ];
    return <AccessibleModal isOpen={isOpen} onClose={onClose} titleId="services-dialog-title"><h2 id="services-dialog-title">Services</h2><div className="service-choice-list">{services.map(service=><Link to={service.link} onClick={onClose} key={service.link}>{service.title}</Link>)}</div></AccessibleModal>;
}
