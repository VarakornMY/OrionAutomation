import React from 'react';
import { business } from '../data/business';

export default function BusinessDetails() {
    return (
        <dl className="business-details">
            <div><dt>Registered name</dt><dd>{business.name}</dd></div>
            <div><dt>Business registration</dt><dd>{business.registrationNumber}</dd></div>
            <div><dt>Location</dt><dd>{business.location}</dd></div>
            <div><dt>Website</dt><dd><a href={business.url}>orionautomation.my</a></dd></div>
        </dl>
    );
}
