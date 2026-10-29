import React from 'react';
import { Link } from 'react-router-dom';
import { Brand } from './Navbar';

const Footer = () => (
    <footer className="site-footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-intro"><Brand /><p>Thoughtful websites. Smarter workflows.<br />More space for what matters.</p><span className="footer-location"><span aria-hidden="true" /> Based in Malaysia</span></div>
                <div><h2>What we do</h2><ul><li><Link to="/ai-automation">Business automation</Link></li><li><Link to="/website">Website development</Link></li><li><Link to="/ai-chatbot">AI chatbots</Link></li><li><Link to="/marketing">Search & marketing</Link></li></ul></div>
                <div><h2>Explore</h2><ul><li><Link to="/website-portfolio">Our work</Link></li><li><Link to="/about-us">About Orion</Link></li><li><Link to="/blog">The journal</Link></li></ul></div>
                <div className="footer-contact"><h2>Have a project in mind?</h2><a className="footer-email" href="mailto:marketing@orionautomation.xyz">marketing@orionautomation.xyz</a><a className="text-link" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Start a conversation <span aria-hidden="true">↗</span></a></div>
            </div>
            <div className="footer-bottom"><p>© {new Date().getFullYear()} Orion Automation</p><div><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms-and-conditions">Terms & conditions</Link></div><a href="#main-content" className="back-to-top">Back to top <span aria-hidden="true">↑</span></a></div>
        </div>
    </footer>
);

export default Footer;
