import React from 'react';
import '../styles/services.css';

const PricingCard = ({ title, price, setupFee, features, isPopular = false, period = '/month' }) => {
    const message = encodeURIComponent(`Hi Orion Automation, I'd like to learn more about the ${title} package.`);
    const feeLabel = setupFee && /^(setup|timeline):/i.test(setupFee) ? setupFee : `Setup: ${setupFee}`;

    return (
        <article className={`pricing-card${isPopular ? ' is-popular' : ''}`}>
            <p className="pricing-label">{isPopular ? 'Most popular' : 'Package overview'}</p>
            <h3 className="pricing-card-heading">{title}</h3>
            <p className="pricing-price"><strong>{price}</strong>{period && <span>{period}</span>}</p>
            {setupFee && <p className="pricing-note">{feeLabel}</p>}
            <ul className="detail-list">
                {features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <a className={`button ${isPopular ? 'button-primary' : 'button-secondary'}`} href={`https://wa.me/601117993797?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${title} on WhatsApp`}>
                Discuss this package <span aria-hidden="true">↗</span>
            </a>
        </article>
    );
};

export default PricingCard;
