import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Site } from './App';

// These public pages contain business information that should be readable
// before JavaScript runs. Account and CMS routes remain client-only.
export const publicRoutes = [
    '/', '/about-us', '/contact', '/website', '/ai-automation', '/ai-chatbot',
    '/marketing', '/privacy-policy', '/terms-and-conditions',
];

export function renderPage(path) {
    const context = {};
    const body = renderToString(
        <HelmetProvider context={context}>
            <StaticRouter location={path}><Site /></StaticRouter>
        </HelmetProvider>,
    );
    const { helmet } = context;
    const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
        .map(value => value.toString()).join('\n');
    return { body, head };
}
