import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const services = [
    ['/ai-automation', 'Business automation', 'Connect tools. Simplify everyday work.'],
    ['/website', 'Website development', 'A better digital home for your business.'],
    ['/ai-chatbot', 'AI chatbots', 'Make every customer conversation count.'],
    ['/marketing', 'Search & marketing', 'Help the right people find you.'],
];

export const Brand = () => (
    <Link to="/" className="brand" aria-label="Orion Automation home">
        <img className="brand-logo" src="/brand/orion-logo.jpg" alt="" width="58" height="58" />
        <span className="brand-wordmark">ORION<span>AUTOMATION</span></span>
    </Link>
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const headerRef = useRef(null);
    const menuButtonRef = useRef(null);
    const servicesButtonRef = useRef(null);
    const location = useLocation();
    const isServicePage = services.some(([path]) => location.pathname === path);

    useEffect(() => {
        setMenuOpen(false);
        setServicesOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const close = (event) => {
            if (event.key === 'Escape') {
                if (menuOpen) menuButtonRef.current?.focus();
                else if (servicesOpen) servicesButtonRef.current?.focus();
                setMenuOpen(false);
                setServicesOpen(false);
            }
            if (event.type === 'pointerdown' && !headerRef.current?.contains(event.target)) {
                setMenuOpen(false);
                setServicesOpen(false);
            }
        };
        const resize = () => {
            if (window.innerWidth > 960) setMenuOpen(false);
        };
        document.addEventListener('keydown', close);
        document.addEventListener('pointerdown', close);
        window.addEventListener('resize', resize);
        return () => {
            document.removeEventListener('keydown', close);
            document.removeEventListener('pointerdown', close);
            window.removeEventListener('resize', resize);
        };
    }, [menuOpen, servicesOpen]);

    useEffect(() => {
        if (!menuOpen) return undefined;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previous; };
    }, [menuOpen]);

    return (
        <header className="site-header" ref={headerRef}>
            <div className="container header-inner">
                <Brand />
                <nav className="desktop-navigation" aria-label="Main navigation">
                    <div className="services-navigation">
                        <button type="button" ref={servicesButtonRef} className={`nav-link nav-disclosure ${isServicePage ? 'active' : ''}`} aria-expanded={servicesOpen} aria-controls="service-navigation" onClick={() => setServicesOpen(!servicesOpen)}>
                            Services <span className={`chevron ${servicesOpen ? 'is-open' : ''}`} aria-hidden="true" />
                        </button>
                        {servicesOpen && <div className="services-popover" id="service-navigation">
                            <span className="popover-label">HOW WE CAN HELP</span>
                            {services.map(([to, label, description]) => <NavLink key={to} to={to} className="service-navigation-link"><span>{label}</span><small>{description}</small></NavLink>)}
                        </div>}
                    </div>
                    <NavLink to="/blog" className="nav-link">Journal</NavLink>
                    <NavLink to="/about-us" className="nav-link">About us</NavLink>
                </nav>
                <a className="button button-primary header-contact" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Let’s talk <span aria-hidden="true">↗</span></a>
                <button type="button" className="mobile-menu-toggle" ref={menuButtonRef} onClick={() => { setMenuOpen(!menuOpen); setServicesOpen(false); }} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
                    <span>{menuOpen ? 'Close' : 'Menu'}</span><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
                </button>
            </div>
            {menuOpen && <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">
                <div className="container">
                    <p className="eyebrow">Our services</p>
                    {services.map(([to, label]) => <NavLink to={to} key={to} className="mobile-navigation-link">{label}<span aria-hidden="true">↗</span></NavLink>)}
                    <div className="mobile-navigation-secondary"><NavLink to="/blog">Journal</NavLink><NavLink to="/about-us">About us</NavLink></div>
                    <a className="button button-primary" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Talk about your project <span aria-hidden="true">↗</span></a>
                    <p className="mobile-navigation-note">Practical digital solutions. Based in Malaysia.</p>
                </div>
            </nav>}
        </header>
    );
};

export default Navbar;
