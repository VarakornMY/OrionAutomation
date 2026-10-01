import React from 'react';
import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';

const sections = [
    {
        id: 'application', title: 'Application of these terms', content: <>
            <p>These Terms &amp; Conditions govern use of orionautomation.xyz, operated by Orion Automation. By using the website, you agree to these terms to the extent permitted by applicable law. If you do not agree, discontinue use. If you act for a business, you must have authority to act on its behalf.</p>
            <p>Paid services require a separately accepted quotation, order, or written service agreement. That agreement takes priority for the relevant project if it conflicts with these website terms. Nothing here removes rights or protections that cannot lawfully be excluded.</p>
        </>,
    },
    {
        id: 'services', title: 'Services, prices, and project agreements', content: <>
            <p>Orion Automation offers website development, AI chatbots, automation workflows, and digital marketing. Website descriptions, example work, plans, prices, and timelines are informational and subject to confirmation for your requirements. Sending an enquiry or selecting a demonstration plan does not create a paid contract.</p>
            <p>Scope, deliverables, fees, taxes where applicable, payment schedule, third-party costs, revisions, delivery dates, support, and renewal arrangements must be confirmed in the applicable project agreement. Additional work or changes to an agreed scope require agreement on any impact to cost and timing.</p>
        </>,
    },
    {
        id: 'demonstrations', title: 'Account and portfolio demonstrations', content: <>
            <p>The public sign-in, profile, and plan-selection features currently demonstrate a user experience using browser storage. They do not verify identity, establish a secure customer account, activate a service subscription, or process payment. Do not rely on these features to store confidential information or evidence of a purchase.</p>
            <p>Portfolio previews illustrate website designs and functionality. Features in a preview are not included in your project unless agreed in its scope. Administrator access is restricted to authorised users.</p>
        </>,
    },
    {
        id: 'acceptable-use', title: 'Acceptable use and your responsibilities', content: <>
            <p>Use the website lawfully and provide accurate information when contacting us. You must have permission to share any content or personal information belonging to others. Keep credentials for any actual service or administrator account confidential.</p>
            <ul>
                <li>Do not attempt unauthorised access, bypass access controls, disrupt the website, or overload its services.</li>
                <li>Do not submit malware, unlawful content, infringing material, or deceptive messages.</li>
                <li>Do not use the website or chatbot to harass others, expose private information, or impersonate another person or business.</li>
            </ul>
            <p>We may restrict access where reasonably necessary to address misuse, security issues, or legal requirements.</p>
        </>,
    },
    {
        id: 'ai', title: 'AI chatbot and informational content', content: <>
            <p>The website chatbot uses AI to answer general questions. AI responses may be incomplete, inaccurate, or outdated. Verify important information with our team before relying on it. Chatbot responses do not constitute professional advice or an authorised quotation, contract, refund approval, or other binding commitment.</p>
            <p>Blog articles and other website content are for general information. We do not guarantee business outcomes, search rankings, traffic, revenue, or uninterrupted availability of third-party AI services.</p>
        </>,
    },
    {
        id: 'ownership', title: 'Intellectual property and client content', content: <>
            <p>Website branding, text, designs, and code are owned by Orion Automation or their respective licensors, unless stated otherwise. You may view the website and share links for lawful personal or business evaluation. Reproduction, resale, or redistribution beyond rights granted by law requires permission from the relevant owner.</p>
            <p>You retain your rights in materials you supply and must ensure we are permitted to use them for the agreed work. Ownership or licensing of client deliverables, reusable components, and third-party assets will be specified in the project agreement. Displaying a third-party name or logo does not transfer its rights.</p>
        </>,
    },
    {
        id: 'payments', title: 'Payments, cancellations, and support', content: <>
            <p>Payment, cancellation, refund, subscription renewal, and support terms are determined by the applicable accepted quotation or service agreement and mandatory law. Contact our team to confirm them before purchasing. These website terms do not impose a blanket no-refund policy or automatic renewal.</p>
            <p>Requests to pause or cancel an active project should be sent in writing. Any fees for completed work, committed external costs, or remaining services depend on the agreed terms and applicable law.</p>
        </>,
    },
    {
        id: 'privacy-and-third-parties', title: 'Privacy and third-party services', content: <>
            <p>Our <Link to="/privacy-policy">Privacy Policy</Link> explains website data handling, analytics, browser storage, AI processing, and your choices. Do not submit sensitive or confidential information through the demonstration features or chatbot.</p>
            <p>External links, hosting, integrations, AI tools, and other third-party services have their own terms and availability. We do not control their content or operation. Any third-party products required for a client project should be identified in its agreed scope.</p>
        </>,
    },
    {
        id: 'availability-and-liability', title: 'Availability and liability', content: <>
            <p>We aim to keep website information useful and accurate, but the website and its demonstrations are provided on an as-available basis. Maintenance, faults, network issues, and provider outages may interrupt access. We may update or remove website content and demonstration features.</p>
            <p>To the extent permitted by law, Orion Automation is not liable for indirect or consequential losses arising from use of, or inability to use, this informational website, including reliance on AI responses or third-party content. Liability for paid work is governed by the relevant service agreement. Nothing in these terms excludes liability or remedies that applicable law does not permit us to exclude.</p>
        </>,
    },
    {
        id: 'law-and-contact', title: 'Governing law, changes, and contact', content: <>
            <p>These website terms are governed by the laws of Malaysia, subject to any mandatory protections that apply to you. Please contact our team first so we can try to resolve a concern. Unresolved disputes may be referred to the competent courts or other dispute-resolution bodies available under applicable law.</p>
            <p>We may revise these terms and update the effective date above. Changes apply to future website use; changes to an existing paid project remain subject to its agreement. If a provision is unenforceable, the remaining provisions continue to apply to the extent permitted by law.</p>
            <p>For questions about these terms or a proposed service, email <a href="mailto:marketing@orionautomation.xyz">marketing@orionautomation.xyz</a> or <a href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">WhatsApp +60 11-1799 3797</a>.</p>
        </>,
    },
];

const TermsAndConditions = () => (
    <LegalPage
        title="Terms & Conditions"
        description="Terms for using the Orion Automation website, AI chatbot, demonstration features, and enquiries about our services."
        path="/terms-and-conditions"
        introduction="Please read these terms before using our website. They explain website use, demonstration features, and how separate agreements apply to paid services."
        sections={sections}
    />
);

export default TermsAndConditions;
