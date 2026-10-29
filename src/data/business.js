// Identity, public location and contacts confirmed by the owner on 30 October 2026.
export const business = {
    name: 'ORION AUTOMATION',
    registrationNumber: '003792279-K',
    location: 'Subang Jaya, Selangor, Malaysia',
    url: 'https://orionautomation.my',
    email: 'orionaiautomation@gmail.com',
    phone: '+601117993797',
    phoneDisplay: '+60 11-1799 3797',
    whatsapp: 'https://wa.me/601117993797',
    serviceArea: 'Malaysia',
    description: 'Website development, workflow automation, AI chatbots and search marketing for businesses in Malaysia.',
};

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${business.url}/#organization`,
    name: business.name,
    legalName: business.name,
    identifier: { '@type': 'PropertyValue', propertyID: 'Business registration number', value: business.registrationNumber },
    url: business.url,
    logo: `${business.url}/brand/orion-logo.jpg`,
    description: business.description,
    email: business.email,
    telephone: business.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Subang Jaya', addressRegion: 'Selangor', addressCountry: 'MY' },
    areaServed: { '@type': 'Country', name: business.serviceArea },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: business.phone,
        email: business.email,
        contactType: 'business enquiries',
    },
};
