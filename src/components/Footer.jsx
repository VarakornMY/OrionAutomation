import React from 'react';
import { Link } from 'react-router-dom';
import { Brand } from './Navbar';
import { business } from '../data/business';

const Footer = () => (
    <footer className="site-footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-intro"><Brand /></div>
                <div><h2>What we do</h2><ul><li><Link to="/ai-automation">Business automation</Link></li><li><Link to="/website">Website development</Link></li><li><Link to="/ai-chatbot">AI chatbots</Link></li><li><Link to="/marketing">Search & marketing</Link></li></ul></div>
                <div><h2>Explore</h2><ul><li><Link to="/website#website-pricing">Website packages</Link></li><li><Link to="/about-us">About Orion</Link></li><li><Link to="/contact">Contact details</Link></li><li><Link to="/blog">The journal</Link></li></ul></div>
                <div className="footer-contact"><h2>Contact</h2><a className="footer-email" href={`mailto:${business.email}`}>{business.email}</a><a className="footer-phone" href={`tel:${business.phone}`}>{business.phoneDisplay}</a><address className="footer-address">{business.location}</address><a className="text-link" href={business.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
            </div>
            <div className="footer-bottom"><p>© {new Date().getFullYear()} {business.name} ({business.registrationNumber})</p><div><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms-and-conditions">Terms & conditions</Link></div><a href="#main-content" className="back-to-top">Back to top</a></div>
        </div>
    </footer>
);

export default Footer;
