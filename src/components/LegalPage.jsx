import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import '../styles/legal.css';

const LegalPage = ({ title, description, path, introduction, sections, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <SEO title={title} description={description} canonical={path} />
            <div className="container legal-container">
                <header className="legal-header">
                    <Link to="/" className="legal-back">Back to home</Link>
                    <p className="legal-eyebrow">ORION AUTOMATION</p>
                    <h1>{title}</h1>
                    <p className="legal-date">Effective date: <time dateTime="2026-10-01">1 October 2026</time></p>
                    <p className="legal-introduction">{introduction}</p>
                </header>
                <nav className="legal-contents" aria-label={`${title} contents`}>
                    <h2>On this page</h2>
                    <ol>
                        {sections.map(section => (
                            <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                        ))}
                    </ol>
                </nav>
                <article className="legal-document" aria-label={title}>
                    {sections.map((section, index) => (
                        <section key={section.id} id={section.id} className="legal-section">
                            <h2>{index + 1}. {section.title}</h2>
                            {section.content}
                        </section>
                    ))}
                    {children}
                </article>
                <div className="legal-related">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                    <a href="mailto:marketing@orionautomation.xyz">Contact our team</a>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
