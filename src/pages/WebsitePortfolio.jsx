import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/supporting.css';

const projects = [
    { title: 'Sumi-Ka Restaurant', category: 'Japanese dining', description: 'An elegant restaurant experience with a clear menu and a warm, distinctive visual identity.', image: '/sumika-card.jpg', link: '/sumika' },
    { title: 'HOTZILLA', category: 'Korean-fusion dining', description: 'A bold, expressive restaurant website that puts the food, menu and brand front and centre.', image: '/hotzilla-logo.jpg', link: '/hotzilla' },
    { title: 'Benjy Cafe', category: 'Cafe & hospitality', description: 'A welcoming cafe website with a considered layout, menu showcase and inviting atmosphere.', image: '/benjy-cafe-logo.jpg', link: '/benjy-cafe' },
];

const WebsitePortfolio = () => (
    <div className="page-shell portfolio-page">
        <SEO title="Website Portfolio" description="Explore Orion Automation's restaurant and cafe website designs, with working previews on mobile and desktop." canonical="/website-portfolio" />
        <section className="page-hero container">
            <p className="eyebrow">Selected website work</p>
            <h1 className="page-title">Different businesses.<br />Distinctive experiences.</h1>
            <p className="page-description">A closer look at how thoughtful design helps a business tell its story. Explore each project to see the full experience.</p>
        </section>
        <section className="section container" aria-label="Website projects">
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <article className="portfolio-card" key={project.link}>
                        <Link to={project.link} className="portfolio-card__image" tabIndex={-1} aria-hidden="true">
                            <img src={project.image} alt="" loading="lazy" width="640" height="440" />
                            <span className="portfolio-card__number">0{index + 1}</span>
                        </Link>
                        <div className="portfolio-card__body">
                            <p className="eyebrow">{project.category}</p>
                            <h2><Link to={project.link}>{project.title}</Link></h2>
                            <p>{project.description}</p>
                            <Link className="portfolio-card__link" to={project.link}>Explore project <span aria-hidden="true">↗</span></Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
        <section className="section container">
            <div className="contact-band portfolio-contact">
                <div><p className="eyebrow">Your next chapter</p><h2>Let's make your website work harder.</h2><p>Tell us what your business needs. We’ll help you find the right starting point.</p></div>
                <a className="button button-light" href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">Discuss your website <span aria-hidden="true">↗</span></a>
            </div>
        </section>
    </div>
);

export default WebsitePortfolio;
