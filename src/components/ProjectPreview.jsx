import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import '../styles/supporting.css';

const ProjectPreview = ({ title, src, canonical }) => (
    <div className="project-preview">
        <SEO title={`${title} — Website preview`} description={`Explore the ${title} website design by Orion Automation.`} canonical={canonical} />
        <div className="project-preview__toolbar">
            <Link to="/website-portfolio" className="project-preview__back"><span aria-hidden="true">←</span> All projects</Link>
            <h1 className="project-preview__title">{title}<span>Website preview</span></h1>
            <a href={src} target="_blank" rel="noopener noreferrer" className="button button-secondary">Open full site <span aria-hidden="true">↗</span></a>
        </div>
        <iframe className="project-preview__frame" src={src} title={`${title} website preview`} />
        <p className="project-preview__hint">Scroll inside the preview to explore. <a href={src} target="_blank" rel="noopener noreferrer">Open the site in a new tab</a> for a full-screen view.</p>
    </div>
);

export default ProjectPreview;
