// Blog post data. Each post is keyed by its slug and rendered by the BlogPost page.
// Section types supported by BlogPost.jsx:
//   { type: 'p', text }                                     paragraph
//   { type: 'h2', text }                                    section heading
//   { type: 'h3', text }                                    sub-heading
//   { type: 'ul', items: [..] }                             bullet list
//   { type: 'ol', items: [..] }                             numbered list
//   { type: 'quote', text, cite }                           pull quote
//   { type: 'cta', text, to, label }                        internal call-to-action

const posts = [
    {
        slug: 'ai-chatbots-for-small-business-2026',
        title: 'AI Chatbots for Small Business in 2026: A Practical Guide',
        description:
            'How small businesses can choose an AI chatbot use case, plan a rollout, and measure response times and enquiry handling.',
        keywords:
            'AI chatbot for small business, chatbot 2026, conversational AI, lead generation chatbot, customer support automation, WhatsApp chatbot, Orion Automation',
        author: 'Orion Automation Team',
        category: 'AI Chatbots',
        readMinutes: 7,
        publishedAt: '2026-04-12',
        updatedAt: '2026-10-30',
        cover: '#c8c1af',
        excerpt:
            'A practical guide to choosing a chatbot use case, preparing its information, and reviewing the first month of conversations.',
        sections: [
            { type: 'p', text: 'An AI chatbot can help with common enquiries, appointment requests, and contact details. The work involved depends on your information, messaging platforms, integrations, and the checks needed before launch.' },
            { type: 'p', text: 'This guide walks through how to choose the right first use case, what to expect from a modern conversational AI, and how to measure whether your chatbot is actually paying for itself.' },

            { type: 'h2', text: 'What to check before choosing a chatbot' },
            { type: 'p', text: 'Language models, searchable knowledge bases, and messaging integrations can support a chatbot that answers from business information. Each connection still needs configuration and testing.' },
            { type: 'p', text: 'For a small business, the useful question is whether a chatbot solves a recurring customer problem. Check where enquiries are delayed and how customers can reach a person when the chatbot cannot help.' },

            { type: 'h2', text: 'Pick one painful use case, not five' },
            { type: 'p', text: 'A broad scope makes a first chatbot harder to test. Start with one recurring type of conversation, such as:' },
            { type: 'ul', items: [
                'After-hours lead qualification — capturing intent while you sleep',
                'Booking and appointment scheduling — eliminating the back-and-forth',
                'FAQ and shipping questions — deflecting the repetitive tickets',
                'Product recommendations — guiding visitors to the right SKU',
            ] },
            { type: 'p', text: 'Pick one. Ship it. Measure it. Then expand.' },

            { type: 'h2', text: 'What a modern AI chatbot can actually do' },
            { type: 'p', text: 'Depending on the product and integrations, a chatbot can be configured to:' },
            { type: 'ul', items: [
                'Hold a multi-turn conversation that remembers earlier context',
                'Answer from your knowledge base and show supporting sources, with checks for missing or incorrect answers',
                'Hand off cleanly to a human when intent or sentiment warrants it',
                'Book directly into Google Calendar, Calendly, or your CRM',
                'Support the languages your customers use, with review by someone who understands each language',
            ] },

            { type: 'h2', text: 'Measuring ROI in the first 30 days' },
            { type: 'p', text: 'Agree on what a useful result looks like before launch, then track these measures:' },
            { type: 'ol', items: [
                'Containment rate — percentage of conversations resolved without a human',
                'Lead capture rate — visitors who provide contact details vs. total visitors',
                'Median first-response time, alongside the time taken to reach a useful answer',
                'Conversion lift — bookings or sales attributable to chatbot-handled sessions',
            ] },
            { type: 'quote', text: 'Use the first month of conversations to review answer quality, customer handoffs, and the measures you agreed before launch.', cite: 'Orion Automation' },

            { type: 'h2', text: 'Common pitfalls to avoid' },
            { type: 'ul', items: [
                'Launching with an empty knowledge base — feed it your real FAQs first',
                'Hiding the "talk to a human" escape hatch — frustrated customers churn fast',
                'Ignoring the transcripts — your weekly review is where the real tuning happens',
                'Treating it as a one-off project rather than a product you iterate on',
            ] },

            { type: 'h2', text: 'Where to go from here' },
            { type: 'p', text: 'If you are exploring an AI chatbot for your business, send us the questions it needs to handle and the tools it would connect to. We can discuss a suitable scope, timeline, and budget.' },
            { type: 'cta', text: 'Ready to see what a chatbot can do for your business?', to: '/ai-chatbot', label: 'Explore AI Chatbots' },
        ],
    },

    {
        slug: 'small-business-website-must-haves-2026',
        title: '10 Things Every Small Business Website Must Have in 2026',
        description:
            'A checklist for small business websites covering performance, accessibility, contact details, useful content, and clear next steps.',
        keywords:
            'small business website 2026, website checklist, SEO best practices, Core Web Vitals, web design Malaysia, conversion optimization, accessibility WCAG, Orion Automation',
        author: 'Orion Automation Team',
        category: 'Websites',
        readMinutes: 8,
        publishedAt: '2026-03-22',
        updatedAt: '2026-10-30',
        cover: '#ead6b9',
        excerpt:
            'Ten areas to review on a small business website, from mobile usability and contact details to pricing and useful content.',
        sections: [
            { type: 'p', text: 'A business website should help people understand what you offer, check the details, and contact you. Review it from the perspective of someone who has never heard of the business.' },
            { type: 'p', text: 'Here are ten areas to check when planning or reviewing a small business website.' },

            { type: 'h2', text: '1. Fast loading on mobile' },
            { type: 'p', text: 'Test page loading on a real phone and a mobile connection. Compress large images, review unnecessary scripts, and check the main content appears promptly.' },

            { type: 'h2', text: '2. A single, obvious primary action' },
            { type: 'p', text: 'Give each page a clear primary action, such as requesting a quote or viewing a package. Keep other navigation available without making every link compete for attention.' },

            { type: 'h2', text: '3. Structured data for AI search' },
            { type: 'p', text: 'Use structured data that accurately describes the business and the content on each page. It can help machines interpret information, but it does not guarantee rankings or AI citations.' },

            { type: 'h2', text: '4. Genuine social proof' },
            { type: 'p', text: 'Use genuine customer feedback with permission and enough context to understand the work involved. Do not invent reviews, results, names, or customer logos.' },

            { type: 'h2', text: '5. Live chat or AI chatbot' },
            { type: 'p', text: 'Chat can offer another way to ask questions. If you add a chatbot, make its limits clear and provide a route to a person.' },
            { type: 'cta', text: 'Curious how a chatbot fits into your site?', to: '/ai-chatbot', label: 'See AI Chatbot Options' },

            { type: 'h2', text: '6. Accessibility (WCAG 2.2 AA)' },
            { type: 'p', text: 'Check sufficient colour contrast, keyboard navigation, informative image descriptions, semantic HTML, and clear form labels. Automated checks should be followed by manual testing.' },

            { type: 'h2', text: '7. Local SEO essentials' },
            { type: 'p', text: 'For a business serving a local area, keep its name, address where public, phone number, opening hours, and service area consistent across the website and business listings.' },

            { type: 'h2', text: '8. Honest pricing — or a clear path to it' },
            { type: 'p', text: 'You do not have to publish exact prices. But hiding all pricing context behind a "Contact us" form costs you the visitors who self-qualify by budget. Show ranges, packages, or a starting price.' },

            { type: 'h2', text: '9. Analytics that you actually read' },
            { type: 'p', text: 'Google Analytics 4, Microsoft Clarity, or Plausible — pick one and check it weekly. The site you launch is never the site that converts; iteration is where the wins come from.' },

            { type: 'h2', text: '10. A blog or resource hub' },
            { type: 'p', text: 'Publish articles that answer questions your customers actually ask. Keep them accurate and current rather than publishing to meet a volume target.' },

            { type: 'h2', text: 'The bar is higher, but so are the tools' },
            { type: 'p', text: 'You do not need to address every item at once. Start with problems that stop people using the site or contacting you, then plan the remaining work.' },
            { type: 'cta', text: 'Discuss a review of your current website.', to: '/website', label: 'Explore Website Services' },
        ],
    },

    {
        slug: 'automate-marketing-without-losing-brand-voice',
        title: 'How to Automate Your Marketing Without Losing Your Brand Voice',
        description:
            'A 2026 framework for marketing automation that scales output without making your brand sound like a robot. Strategy, tools, and guardrails that work.',
        keywords:
            'marketing automation 2026, AI marketing, brand voice, content automation, email marketing automation, social media automation, Orion Automation',
        author: 'Orion Automation Team',
        category: 'Marketing',
        readMinutes: 6,
        publishedAt: '2026-02-18',
        updatedAt: '2026-10-30',
        cover: '#f1daac',
        excerpt:
            'Marketing automation is a force multiplier — until it makes every email sound the same. Here is how to scale without flattening what makes you, you.',
        sections: [
            { type: 'p', text: 'The promise of marketing automation is seductive: send the right message to the right person at the right time, at scale, without burning out your team. The risk is just as real: every brand starts sounding like the same beige assistant.' },
            { type: 'p', text: 'Here is how to capture the leverage without losing what makes your business distinct.' },

            { type: 'h2', text: 'Separate the mechanical from the creative' },
            { type: 'p', text: 'Not all marketing work is created equal. Some of it is mechanical — tagging, scheduling, segmenting, A/B testing. Some of it is creative — the angle, the headline, the voice. Automate the mechanical. Protect the creative.' },
            { type: 'ul', items: [
                'Automate: send-time optimization, list segmentation, drip cadences, performance reporting',
                'Protect: brand voice, headline writing, story angles, customer interviews',
            ] },

            { type: 'h2', text: 'Build a voice spec your AI can follow' },
            { type: 'p', text: 'If you use AI to draft content, give it real rails. A one-page voice spec — five do\'s, five don\'ts, three example sentences in your voice, three sentences that are not your voice — is the difference between sounding like yourself and sounding like everyone else.' },
            { type: 'quote', text: 'The brands that win at AI-assisted marketing are the ones who treat their voice as a product, not a vibe.', cite: 'Orion Automation' },

            { type: 'h2', text: 'Use automation to listen, not just to speak' },
            { type: 'p', text: 'Automation can also help organise customer feedback from support conversations, reviews, and sales notes. Collect it with appropriate permission and let people review the themes before acting on them.' },
            { type: 'p', text: 'You cannot scale a brand voice you do not know. Listening at scale is what makes speaking at scale possible.' },

            { type: 'h2', text: 'A starter stack that does not break the bank' },
            { type: 'p', text: 'For a small business, you do not need an enterprise marketing cloud. A practical starter stack:' },
            { type: 'ol', items: [
                'Email and automation: a modern ESP with workflow builder',
                'CRM: something your sales team will actually use',
                'Content AI: with your voice spec loaded as a system prompt',
                'Analytics: one source of truth, reviewed weekly',
                'Social scheduling: a single tool, not three',
            ] },

            { type: 'h2', text: 'Guardrails before you scale' },
            { type: 'ul', items: [
                'Every automated send gets a human review for the first 30 days',
                'No AI-generated content goes out without a name attached to it',
                'A monthly "voice audit" — pick 10 pieces of output and check them against the spec',
                'A kill switch on every automated workflow',
            ] },

            { type: 'h2', text: 'The takeaway' },
            { type: 'p', text: 'Choose a few repeatable marketing tasks, define who reviews the output, and measure whether the process saves time without reducing quality. Keep customer-facing wording under human review.' },
            { type: 'cta', text: 'Want help designing a marketing system that scales with your voice?', to: '/marketing', label: 'Explore Marketing Services' },
        ],
    },

    {
        slug: 'seo-for-ai-search-engines',
        title: 'SEO for AI Search Engines: How to Get Cited by ChatGPT, Perplexity, and Google AI Overviews',
        description:
            'How to make business information and articles easier to find, understand, and check when people use search engines and AI assistants.',
        keywords:
            'AI SEO, generative engine optimization, GEO, ChatGPT SEO, Perplexity SEO, Google AI Overviews, structured data, schema markup, Orion Automation',
        author: 'Orion Automation Team',
        category: 'SEO',
        readMinutes: 9,
        publishedAt: '2026-01-15',
        updatedAt: '2026-10-30',
        cover: '#dac4b3',
        excerpt:
            'A guide to clear answers, accurate business information, crawlable pages, and measuring referrals from AI assistants.',
        sections: [
            { type: 'p', text: 'People can use search results and AI assistants to research a business. An answer may summarise several pages or link to supporting sources, so the information on your own site needs to be easy to understand and check.' },
            { type: 'p', text: 'This guide covers practical content and website checks. No content format can guarantee that an assistant will cite a particular business.' },

            { type: 'h2', text: 'Write for the question, not the keyword' },
            { type: 'p', text: 'Organise a page around the question it answers. A direct answer near the start helps readers assess whether the rest of the page is relevant.' },
            { type: 'ul', items: [
                'Lead with the answer, then explain',
                'Use H2s phrased as the questions your customer actually asks',
                'Keep the answer self-contained in 2-3 sentences before going deeper',
            ] },

            { type: 'h2', text: 'Use relevant structured data' },
            { type: 'p', text: 'Structured data describes page content in a machine-readable format. Choose types that match what is actually on the page, such as:' },
            { type: 'ul', items: [
                'Organization schema for accurate business details',
                'Article schema on blog posts',
                'Question-and-answer markup only where the page and current platform guidance support it',
                'Product or Service schema where relevant',
                'BreadcrumbList for hierarchy',
            ] },

            { type: 'h2', text: 'Citations and external signals matter more than ever' },
            { type: 'p', text: 'Relevant coverage and links can help people discover and check your business. Seek genuine mentions from organisations that understand your work; avoid purchased endorsements or fabricated authority.' },
            { type: 'p', text: 'Three durable tactics:' },
            { type: 'ol', items: [
                'Get cited by industry publications — guest posts, expert quotes, original research',
                'Build a public-facing brand — podcasts, conference talks, social presence',
                'Original data is link-magnet gold — survey your customers, publish the findings',
            ] },

            { type: 'h2', text: 'Keep information current' },
            { type: 'p', text: 'Review time-sensitive claims, prices, and product details. Update the content when facts change, and change its update date only when a meaningful review or revision has taken place.' },

            { type: 'h2', text: 'Don\'t neglect the basics' },
            { type: 'p', text: 'Generative engine optimization does not replace traditional SEO. It sits on top of it. The fundamentals still apply:' },
            { type: 'ul', items: [
                'Fast site, clean HTML, crawlable structure',
                'A sitemap.xml that is actually up to date',
                'Internal linking that signals topical depth',
                'Mobile-first everything',
            ] },

            { type: 'h2', text: 'How to measure it' },
            { type: 'p', text: 'Use several measures rather than treating a single assistant response as a stable ranking:' },
            { type: 'ol', items: [
                'Brand mention searches — are people asking about you by name?',
                'Referral traffic from chat.openai.com, perplexity.ai, and similar',
                'Sample citation checks — ask the AIs your own commercial queries and see who they name',
            ] },

            { type: 'h2', text: 'The strategic shift' },
            { type: 'p', text: 'A useful starting point is a site with accurate business details, readable answers, clear sources, and working navigation. Review actual enquiries and referrals to decide what to improve next.' },
            { type: 'cta', text: 'Want an AI-search-ready website?', to: '/website', label: 'Explore Website Services' },
        ],
    },

    {
        slug: 'workflow-automation-smb-playbook',
        title: 'Workflow Automation in 2026: The SMB Playbook for Eliminating Manual Work',
        description:
            'A practical 2026 playbook for SMBs to identify, build, and measure workflow automations across CRM, email, sheets, and payments without breaking what already works.',
        keywords:
            'workflow automation 2026, SMB automation, business process automation, Zapier, n8n, Make, AI agents, LLM workflows, CRM automation, ROI automation, Orion Automation',
        author: 'Orion Automation Team',
        category: 'AI Automation',
        readMinutes: 8,
        publishedAt: '2026-05-20',
        updatedAt: '2026-10-30',
        cover: '#c8c1af',
        excerpt:
            'A no-fluff 2026 playbook for SMBs ready to stop pasting data between tabs — how to pick the right first workflow, build it, and prove it paid for itself.',
        sections: [
            { type: 'p', text: 'When CRM, spreadsheets, email, and invoicing tools are separate, staff may need to copy the same information between them. List those handoffs and the time they take before deciding what to automate.' },
            { type: 'p', text: 'Workflow automation can connect those steps, but a poorly tested connection can also repeat errors. This guide covers how to choose a process, test it, and monitor the result.' },

            { type: 'h2', text: 'What workflow tools can connect' },
            { type: 'p', text: 'Workflow tools can combine scheduled jobs, API connections, and optional AI steps for tasks such as extracting fields or drafting replies. Check the available connectors, permissions, running costs, and review requirements for your own tools.' },
            { type: 'p', text: 'The choice of tool follows the process: what starts it, what information it needs, what it may change, and who is responsible when a run fails.' },

            { type: 'h2', text: 'Find the candidates before you pick a tool' },
            { type: 'p', text: 'Choose a process because it causes a measurable problem, rather than because a tool can automate it. Useful candidates share four traits:' },
            { type: 'ul', items: [
                'High frequency — it happens daily or many times a week, not once a quarter',
                'Rule-based — the decisions can be written down without lots of "it depends"',
                'Cross-tool — the work currently jumps between two or more systems',
                'Measurable — you can name the metric that should move (hours saved, response time, error rate)',
            ] },
            { type: 'p', text: 'A simple way to surface the list: ask every department lead to name the three most repetitive tasks their team does. The overlap between teams is your priority queue. For most SMBs, the first three picks land in the same neighborhood — lead intake and routing, invoice and quote generation, and onboarding handoffs between sales and operations.' },

            { type: 'h2', text: 'Map the process before you automate it' },
            { type: 'p', text: 'You cannot automate a chaotic process. You can only amplify it. Before opening any builder, write down the current workflow on one page: trigger, every step, every decision branch, every handoff, every system involved, and who owns the output today. Two things will happen. You will discover steps no one realised were happening, and you will find at least one step that can be deleted entirely.' },
            { type: 'p', text: 'Delete first, then automate. A workflow with three steps that does the right thing beats a workflow with seven steps that automates the wrong thing faster.' },

            { type: 'h2', text: 'Anatomy of a modern SMB workflow' },
            { type: 'p', text: 'A robust 2026 workflow has six moving parts. You do not need all of them in every automation, but you should know which ones you are using and which you are skipping on purpose.' },
            { type: 'ol', items: [
                'Trigger — a new form submission, a paid invoice, an inbound email, a scheduled time',
                'Data fetch and enrich — pull related records from your CRM, look up history, append context',
                'Conditional logic — branch on value, urgency, customer tier, or LLM-classified intent',
                'AI step (optional) — let a model draft a reply, summarise input, or extract structured fields from messy text',
                'Action — write to the CRM, send the email, generate the invoice, post to Slack, charge the card',
                'Human-in-the-loop checkpoint — for anything irreversible or above a risk threshold, require an approval click before the action fires',
            ] },
            { type: 'p', text: 'An AI step may help interpret unstructured text, but it should be tested against clear rules and examples. Keep a manual route for uncertain or unexpected input.' },

            { type: 'h2', text: 'Pick the orchestrator that fits your team' },
            { type: 'p', text: 'There is no universal right answer here, but the trade-offs are clear in 2026.' },
            { type: 'ul', items: [
                'Zapier: check its connectors, task allowances, permissions, and costs against your expected volume',
                'Make: evaluate its visual workflow editor with a small example of your branching and transformation needs',
                'n8n: evaluate its workflow features and hosting options, including the maintenance and security responsibilities of self-hosting',
            ] },
            { type: 'p', text: 'Pick one and standardise. The cost of running three orchestrators in parallel — context switching, duplicated credentials, fragmented logs — is almost always greater than the cost of consolidating on the second-best fit.' },

            { type: 'h2', text: 'The failure modes that will bite you' },
            { type: 'p', text: 'Plan for failures before connecting a workflow to customer or financial records. Check the following risks:' },
            { type: 'ul', items: [
                'Silent failures — the workflow runs, produces output, and no one notices it was wrong until a customer complains. Fix: every workflow needs an owner and a weekly five-minute log review',
                'Cascading errors — a five-step chain across three external systems compounds failure probability at every hop. Fix: add retries, dead-letter queues, and alerts on the steps you cannot afford to lose',
                'Dirty data in, dirty actions out — duplicate contacts, inconsistent vendor names, and stale records turn confident automations into confident mistakes. Fix: clean the data before you connect the pipe',
                'No kill switch — when something breaks, you need to stop the bleeding in one click, not unwind ten zaps by hand. Fix: every workflow has a single toggle and a documented rollback',
                'Over-automating judgment calls — refunds, contract terms, anything regulated. Fix: keep a human in the loop where accuracy or accountability matters',
            ] },
            { type: 'quote', text: 'Automation does not fix a broken process — it just lets you break it faster and at scale. Map first, delete second, automate third.', cite: 'Orion Automation' },

            { type: 'h2', text: 'Measuring ROI without fooling yourself' },
            { type: 'p', text: 'Record a baseline before launch so you can compare the result with the manual process. Review these measures:' },
            { type: 'ol', items: [
                'Hours reclaimed per week — multiply by a loaded labour cost to get a real currency figure',
                'Cycle time — how long the process used to take end to end vs. now',
                'Error rate — the percentage of runs that needed manual cleanup or caused a customer issue',
                'Revenue or retention lift — for customer-facing workflows, the downstream metric that actually matters',
            ] },
            { type: 'p', text: 'Calculate the result from your own usage: time saved, corrections needed, licence and hosting costs, maintenance, and the cost of building the workflow. Agree a review point without assuming a fixed payback period.' },

            { type: 'h2', text: 'An example 30-day rollout' },
            { type: 'p', text: 'Use this as a planning example, then adjust it for the process complexity, testing, and people involved:' },
            { type: 'ol', items: [
                'Week 1 — pick the one process, map it, delete the dead steps, and write the baseline metrics',
                'Week 2 — build the workflow in a sandbox, test with real (but copied) data, add the human-in-the-loop step',
                'Week 3 — go live on a small slice (one team, one customer segment), monitor the logs daily, fix what surfaces',
                'Week 4: review the pilot, document support and rollback steps, and expand only if the checks pass',
            ] },
            { type: 'p', text: 'Two automations shipped and stable beats ten half-built workflows every time. The teams that win at automation in 2026 are the ones who treat each workflow as a product they own, not a script they set and forget.' },
            { type: 'cta', text: 'Want a candid second opinion on which workflow to automate first?', to: '/ai-automation', label: 'Explore AI Automation' },
        ],
    },

    {
        slug: 'pipeline-automation-reliable-data',
        title: 'Pipeline Automation: Building Reliable Data Pipelines for Growing Businesses in 2026',
        description:
            'A plain-English guide for ops leaders and founders on building data pipelines that don\'t break — ETL vs ELT, modern tools, observability, and where things go wrong.',
        keywords:
            'data pipeline automation, ETL vs ELT, Fivetran, Airbyte, dbt, reverse ETL, Hightouch, n8n, data observability, AI data pipelines, single source of truth, Orion Automation',
        author: 'Orion Automation Team',
        category: 'AI Automation',
        readMinutes: 8,
        publishedAt: '2026-05-19',
        updatedAt: '2026-10-30',
        cover: '#ead6b9',
        excerpt:
            'How to define consistent metrics, move data between systems, and identify pipeline failures before relying on reports.',
        sections: [
            { type: 'p', text: 'Every growing business eventually hits the same wall. The CEO asks a simple question — "what did we book last month, and where did the leads come from?" — and three different teams produce three different numbers. The CRM says one thing, the finance system says another, and the marketing dashboard tells a third story. The problem is rarely the people. It is the pipes connecting your systems.' },
            { type: 'p', text: 'Data pipeline automation is the unglamorous plumbing that makes the rest of your stack honest. Done well, it is invisible. Done badly, it quietly poisons every decision you make. This guide is for founders and ops leaders who do not want to become data engineers, but do need to know what good looks like in 2026.' },

            { type: 'h2', text: 'What a data pipeline actually is' },
            { type: 'p', text: 'A data pipeline is the automated path that data takes from where it is created to where it is used. A lead fills a form on your website. That record needs to land in your CRM, trigger a Slack ping to sales, update a finance forecast, and feed a weekly report — all without anyone copy-pasting anything.' },
            { type: 'p', text: 'Most small and mid-sized businesses already have pipelines. They just happen to be manual ones held together by a brittle mix of CSV exports, Zapier flows, and an ops person who remembers which spreadsheet matters. That works at ten customers. It breaks at a thousand.' },

            { type: 'h2', text: 'Why this matters more than it used to' },
            { type: 'p', text: 'The freshness and accuracy of data matter when reports, customer messages, or automated actions depend on it. Decide how up to date each source needs to be, and what should happen when it is unavailable.' },
            { type: 'p', text: 'In practical terms, a reliable pipeline gives you four things:' },
            { type: 'ul', items: [
                'Reports that match across teams — one number for revenue, one for active customers',
                'A single source of truth so finance, sales, and marketing stop arguing about whose CSV is right',
                'Leads and customer data that stay in sync between your CRM, support tool, and billing system',
                'A foundation that AI agents can actually trust when they take actions on your behalf',
            ] },

            { type: 'h2', text: 'ETL vs ELT, in plain language' },
            { type: 'p', text: 'You will hear these two acronyms constantly. They describe the same three steps in different orders. ETL means Extract, Transform, Load — you pull the data out, clean it up, then drop it into the destination. ELT flips the middle two — you pull the data, dump it straight into a cloud warehouse, and transform it later inside the warehouse using SQL.' },
            { type: 'p', text: 'ELT can be useful when a warehouse supports the transformations you need and retaining raw data is appropriate. ETL may be a better fit when data must be cleaned or limited before it reaches the destination.' },
            { type: 'p', text: 'Why you care: ELT is more forgiving. If you decide next quarter that you want to slice revenue differently, you do not need to rebuild the pipeline. You just rewrite a SQL model. ETL pipelines, by contrast, tend to lock in assumptions you have not made yet.' },

            { type: 'h2', text: 'The 2026 tooling landscape' },
            { type: 'p', text: 'You do not need to know all of these by heart, but recognising the categories helps when a vendor or consultant starts throwing names around.' },
            { type: 'ul', items: [
                'Ingestion: tools such as Fivetran and Airbyte move data from source systems; check connector coverage, sync limits, and costs',
                'Transformation: tools such as dbt organise data transformations in version-controlled SQL',
                'Reverse ETL: tools such as Hightouch and Census can move prepared warehouse data back to operational systems; verify the destinations you need',
                'Lightweight orchestration: n8n and similar low-code tools are excellent for the smaller, glue-everything-together workflows that do not need a full warehouse',
                'Observability: Monte Carlo and similar platforms watch your pipelines for silent failures — schema changes, freshness gaps, volume anomalies',
            ] },
            { type: 'p', text: 'Vendor ownership, pricing, and product scope can change. Check the current documentation, export options, and support arrangements before committing to a platform.' },

            { type: 'h2', text: 'A sensible reference architecture for a growing business' },
            { type: 'p', text: 'If you are starting from scratch or replacing a tangle of spreadsheets, this is the shape most teams should aim for:' },
            { type: 'ol', items: [
                'Pick a cloud warehouse — BigQuery, Snowflake, or Databricks. This is your single source of truth',
                'Use a managed ingestion tool to pull from your CRM, billing, ad platforms, and product database into the warehouse',
                'Transform the raw tables into clean, business-friendly models using dbt — define "active customer" once, in code, with tests',
                'Connect your BI tool (Metabase, Looker, Power BI) to those clean models, not the raw data',
                'Use reverse ETL to push the cleaned-up customer attributes back into the CRM and support tool so frontline teams see the same numbers',
                'Add observability from day one — do not wait until something breaks at 2am',
            ] },
            { type: 'p', text: 'For early-stage teams, you can skip the warehouse and run a leaner version with n8n syncing two or three systems directly. That is fine until you have more than a handful of sources or anyone starts asking historical questions. At that point, bite the bullet and stand up the warehouse.' },

            { type: 'h2', text: 'Where AI is genuinely changing things' },
            { type: 'p', text: 'The phrase "AI-augmented data pipeline" is doing a lot of work in vendor marketing right now. Strip the hype and there are three real shifts worth caring about.' },
            { type: 'p', text: 'AI assistants can help draft connector configurations, queries, or transformations. Review their output and test it against sample data before letting it modify production records.' },
            { type: 'p', text: 'Monitoring tools can flag unusual row counts, schema changes, and stale data. Define which conditions should raise an alert and who will investigate it.' },
            { type: 'p', text: 'Third, and most consequentially, agentic systems are starting to act on your data autonomously. That raises the cost of bad data sharply. An agent that emails the wrong customer because a contact field was stale is a different class of problem than a slightly wrong weekly report.' },

            { type: 'h2', text: 'Where things actually go wrong' },
            { type: 'p', text: 'Include these failure cases in the design and review checklist:' },
            { type: 'ul', items: [
                'Building the pipeline before defining the metrics — you cannot model "active customer" if the business has not agreed what that means',
                'Skipping data quality checks because the source system "looks fine" — duplicates and nulls always show up at the worst moment',
                'Underestimating schema drift — when a SaaS tool renames a field on their end, your pipeline silently breaks',
                'No ownership — pipelines need a name next to them, not a shared inbox',
                'Usage-based pricing: estimate sync volume and set spending alerts where available, since changes in source data can increase costs',
                'Activating bad data downstream — reverse ETL pushes whatever you give it, so syncing a messy table into the CRM means sales now distrusts the CRM too',
            ] },

            { type: 'h2', text: 'How to start without overbuilding' },
            { type: 'p', text: 'You do not need a six-month project to fix this. Most growing businesses get the biggest wins from a focused first phase that proves the model before scaling it.' },
            { type: 'ol', items: [
                'Write down the three or four numbers your leadership team actually uses to run the business',
                'Identify the systems those numbers live in today, and where they currently disagree',
                'Stand up one warehouse and one ingestion tool, and load only the sources needed for those numbers',
                'Define each metric once, in dbt or equivalent, with tests that fail loudly when the data looks wrong',
                'Wire the cleaned numbers back into the CRM and BI tool so everyone is reading from the same place',
                'Only then add the second wave of sources, dashboards, and automations',
            ] },
            { type: 'quote', text: 'A data pipeline is not a project you finish. It is a product you maintain. The teams that treat it that way are the ones whose dashboards still tell the truth a year later.', cite: 'Orion Automation' },

            { type: 'h2', text: 'Where to go from here' },
            { type: 'p', text: 'If reports disagree or your CRM and finance records drift apart, start by documenting definitions and tracing the data between systems. Scope the first phase around a small set of reports and clear checks, rather than promising a fixed timeline.' },
            { type: 'cta', text: 'Want a pipeline you can actually trust? Let\'s scope it.', to: '/ai-automation', label: 'Explore AI Automation' },
        ],
    },

    {
        slug: 'production-internal-system-automation',
        title: 'Production Internal System Automation: Modernizing the Tools Your Team Runs On',
        description:
            'How mid-sized businesses can replace spreadsheet chaos and aging legacy software with lightweight internal apps, AI copilots, and proper audit trails in 2026.',
        keywords:
            'internal tools, internal system automation, Retool, Appsmith, ToolJet, low-code internal apps, admin dashboard, approval workflows, audit trail, AI copilot, buy vs build, Orion Automation',
        author: 'Orion Automation Team',
        category: 'AI Automation',
        readMinutes: 8,
        publishedAt: '2026-05-18',
        updatedAt: '2026-10-30',
        cover: '#f1daac',
        excerpt:
            'Shared spreadsheets and aging legacy software are quietly draining your operations team. Here is how mid-sized businesses are moving to lightweight, AI-augmented internal apps in 2026 — and what to build, buy, or skip.',
        sections: [
            { type: 'p', text: 'Walk into the operations floor of almost any mid-sized business and you will find the same thing: a shared spreadsheet with thirty tabs, a Word template someone emails around for approvals, and a legacy desktop application from 2011 that one person knows how to restart. The dashboards live in someone\'s head. The audit trail is a Slack thread. Everyone is busy, nothing is wrong on paper, and yet the business is leaking hours every week.' },
            { type: 'p', text: 'Before replacing an internal system, identify its current responsibilities and the problems a change should solve. Compare building, buying, and assembling tools against the budget, maintenance work, and controls you need.' },

            { type: 'h2', text: 'The real cost of spreadsheet chaos' },
            { type: 'p', text: 'Spreadsheets are not the enemy. They are the most successful piece of business software ever shipped. The problem is what happens when a spreadsheet becomes a production system — shared between five people, edited concurrently, copy-pasted into PDFs, and treated as the source of truth for decisions that involve real money.' },
            { type: 'p', text: 'When several people depend on the same spreadsheet, formula changes, duplicate entries, and unclear ownership can cause mistakes. Record the time spent reconciling data and correcting errors so the cost is based on your own operation.' },

            { type: 'h2', text: 'What "production internal system automation" actually means' },
            { type: 'p', text: 'When we say production internal system automation, we are talking about replacing the connective tissue of your business with software that behaves like software — not like a shared document. The core building blocks are well-understood by now:' },
            { type: 'ul', items: [
                'Internal admin tools and dashboards — read and write to your real databases instead of exports',
                'Approval workflows — multi-step routing with reminders, deadlines, and escalation',
                'Document generation — quotes, invoices, contracts, and reports produced from structured data',
                'Role-based access control — finance sees finance, ops sees ops, contractors see only their slice',
                'Audit trails — every change tied to a user, a timestamp, and a reason',
                'Integrations — your accounting system, CRM, e-signature tool, and warehouse all talking to each other',
            ] },
            { type: 'p', text: 'You do not need all of this on day one. You need to know that the platform you pick can grow into all of it without a rewrite.' },

            { type: 'h2', text: 'The 2026 internal-tools landscape, briefly' },
            { type: 'p', text: 'Internal-tool platforms offer different approaches to database access, forms, approvals, and deployment. Compare them using a small example from your own process:' },
            { type: 'ul', items: [
                'Retool: check database connections, access controls, deployment choices, and the licensing needed for your users',
                'Appsmith: evaluate its application builder, scripting options, and maintenance requirements',
                'ToolJet: evaluate its application builder, integrations, access controls, and deployment requirements',
                'Budibase and UI Bakery: test forms, data editing, and approval needs against the features of the relevant edition',
                'Custom apps — still the right call when the workflow is your competitive edge, not a commodity',
            ] },
            { type: 'p', text: 'The platform is only part of the decision. A useful internal app also needs clear permissions, reliable data, testing, and someone responsible for support.' },

            { type: 'h2', text: 'AI copilots inside internal tools' },
            { type: 'p', text: 'The biggest shift in 2026 is not low-code — it is the AI layer sitting inside every modern internal tool. A few patterns that are now table stakes:' },
            { type: 'ul', items: [
                'Natural-language query — finance staff asking "show me unpaid invoices over 60 days" instead of writing SQL',
                'Summarization on every record — a one-paragraph view of a customer, ticket, or supplier built from the underlying data',
                'Drafting and document generation — purchase orders, customer responses, and meeting notes pre-filled and reviewed',
                'Anomaly detection — the system flags the invoice that does not match the PO before a human has to find it',
                'Workflow copilots — "this approval has been sitting for four days, here is a one-click escalation"',
            ] },
            { type: 'p', text: 'The catch: every AI interaction inside an internal tool needs to be logged. Regulators, auditors, and your own future self will want to know what the model saw, what it suggested, who accepted it, and when. Audit trails are no longer a compliance afterthought — they are the foundation that makes AI inside operations safe to ship.' },

            { type: 'h2', text: 'Migrating out of spreadsheet chaos without breaking the business' },
            { type: 'p', text: 'The mistake most teams make is trying to replace the spreadsheet in one move. That fails because the spreadsheet is doing twelve jobs at once and nobody has written them down. A safer migration path looks like this:' },
            { type: 'ol', items: [
                'Pick one spreadsheet that hurts the most — usually approvals, inventory, or finance reconciliation',
                'Document every column, every formula, and every unwritten rule for two weeks before touching code',
                'Build a thin internal app that owns only the highest-friction step first, with the spreadsheet still in play',
                'Move read traffic to the app — let people view, search, and filter there while editing stays in the sheet',
                'Move write traffic when trust is established — approvals, edits, and new records move into the app',
                'Retire the spreadsheet only when nobody has opened it for two weeks',
            ] },
            { type: 'p', text: 'This staged approach is slower than a rewrite on paper. In practice it ships, while rewrites stall.' },

            { type: 'h2', text: 'Buy, build, or assemble' },
            { type: 'p', text: 'Compare buying an existing product, assembling an app from existing components, and building custom software. A starting framework is:' },
            { type: 'ul', items: [
                'Buy when the workflow is a commodity — payroll, accounting, ticketing, e-signature. Do not rebuild what fifty companies already sell',
                'Assemble when the workflow is specific to you but the components are not — approvals, dashboards, internal portals, document generation. This is where low-code platforms earn their keep',
                'Build when the workflow is part of your competitive edge — the thing your customers actually pay you to do better than your competitors',
            ] },
            { type: 'p', text: 'Before building, review the tools you already pay for and whether they cover the requirement. Compare the full costs of licences, integration, migration, training, maintenance, and support. A custom app should solve a documented need rather than duplicate an existing tool.' },

            { type: 'h2', text: 'Security, access, and audit trails are not optional' },
            { type: 'p', text: 'The moment your internal system can change something — approve a payment, edit a customer record, push a price update — it stops being a productivity tool and starts being a system of record. That brings non-negotiable requirements:' },
            { type: 'ul', items: [
                'Role-based access control — staff see only the data and actions their role allows',
                'Single sign-on — provision and deprovision through your existing identity provider, not a shared password',
                'Audit logging — who did what, when, from where, and against which record',
                'Reviewable AI actions — every model-generated suggestion stored with its inputs and the human decision that followed',
                'Data residency awareness — for regulated industries, knowing where your data physically lives',
            ] },
            { type: 'p', text: 'Check each requirement in the proposed system rather than assuming a new app provides it automatically. Spreadsheet products may already have useful permissions and history features, while custom apps need those controls designed and tested.' },

            { type: 'h2', text: 'How to measure whether it is working' },
            { type: 'p', text: 'A modernization project that cannot prove its value will be quietly defunded. Track these numbers from the first sprint:' },
            { type: 'ol', items: [
                'Hours per week recovered — measured against the spreadsheet baseline, per role',
                'Approval cycle time — median time from request to final decision, end to end',
                'Error rate — disputes, reversals, and corrections per hundred transactions',
                'Adoption — percentage of intended users active weekly, not just provisioned',
                'Auditability — time to answer a "who changed this and why" question, in minutes',
            ] },
            { type: 'quote', text: 'The point of internal system automation is not to replace your spreadsheets with software. It is to replace the invisible tax your team pays every day with auditable, leverageable infrastructure.', cite: 'Orion Automation' },

            { type: 'h2', text: 'Where to start' },
            { type: 'p', text: 'If your team is still running on shared spreadsheets, paper forms, or legacy software older than your newest hire, the highest-leverage move you can make this quarter is to pick one painful workflow and replace it with a real internal app. Not a rewrite of everything. One workflow. The compounding starts there.' },
            { type: 'cta', text: 'Ready to retire the spreadsheet that runs your operations?', to: '/ai-automation', label: 'Explore AI Automation' },
        ],
    },

    {
        slug: 'websites-that-convert-2026',
        title: 'Designing Websites That Help Visitors Take the Next Step in 2026',
        description:
            'Practical website design checks covering clear calls to action, genuine customer evidence, mobile usability, and short forms.',
        keywords:
            'website conversion 2026, conversion rate optimization, CRO best practices, hero section design, CTA optimization, social proof, mobile conversion, AI search traffic, Orion Automation',
        author: 'Orion Automation Team',
        category: 'Websites',
        readMinutes: 7,
        publishedAt: '2026-05-17',
        updatedAt: '2026-10-30',
        cover: '#dac4b3',
        excerpt:
            'Clear wording, working mobile layouts, useful contact information, and shorter forms can remove obstacles between visitors and an enquiry.',
        sections: [
            { type: 'p', text: 'A conversion might be an enquiry, booking, or purchase. Define the action you want a page to support, then measure how people move towards it and where they stop. Results vary with the audience, service, traffic source, and measurement setup.' },
            { type: 'p', text: 'Start by checking whether the page explains the offer, loads reliably, and lets a visitor complete the next step. Change one meaningful part at a time and review the result.' },

            { type: 'h2', text: 'The hero section is a promise, not a poster' },
            { type: 'p', text: 'The opening of a page should answer three questions clearly: what is this, who is it for, and what happens next. Use wording a first-time visitor can understand without knowing the business.' },
            { type: 'p', text: 'A crowded opening can make it hard to choose what to do. Give the main action enough space, keep the explanation short, and move supporting details to the relevant sections below.' },

            { type: 'h2', text: 'CTA discipline beats CTA cleverness' },
            { type: 'p', text: 'Choose a primary action that fits the page, such as viewing a package or requesting a quote. Test the wording and placement using your own visitors rather than assuming a published benchmark will apply.' },
            { type: 'p', text: 'In practice this means one primary action per page, repeated at natural decision points — after the hero, after the social proof, after the pricing, and at the end. A secondary action is fine if it genuinely serves a different audience segment, but it should be visually quieter. Two equal-weight buttons is not balance, it is paralysis.' },

            { type: 'h2', text: 'Social proof has to be specific to be believed' },
            { type: 'p', text: 'Use genuine testimonials or project examples with permission. Include enough context to understand the work, and make any stated results traceable to the customer and method of measurement.' },
            { type: 'p', text: 'Place relevant evidence beside the offer it supports. Only display badges, affiliations, customer logos, and payment options that you are entitled to use and that accurately describe the business.' },

            { type: 'h2', text: 'Mobile is not "also" — it is the primary surface' },
            { type: 'p', text: 'Check mobile and desktop separately. A readable desktop page may still have small touch targets, difficult forms, or a long checkout on a phone. Use your own analytics to identify where visitors have trouble.' },
            { type: 'p', text: 'A mobile-first audit is brutal but cheap. Open your site on a real phone over 4G, not WiFi. Can you read the hero without zooming? Is the CTA reachable with one thumb? Does the form auto-fill from the keyboard? Do you use the correct input types for email, phone, and number fields? Most small business sites fail at least three of these — and each failure compounds the desktop-to-mobile gap.' },

            { type: 'h2', text: 'Every form field costs you conversions' },
            { type: 'p', text: 'Ask for the information needed to handle the request. Explain why sensitive or unexpected fields are necessary, and move optional details to a later conversation where possible.' },
            { type: 'p', text: 'The honest test is to look at every field on your form and ask: will we actually use this in the first 24 hours? If the answer is no, delete it or move it to a follow-up step. Ask for the minimum required to start the conversation, and earn the rest later.' },
            { type: 'ul', items: [
                'Replace "Company size" dropdowns with optional fields, not required',
                'Drop "How did you hear about us?" — it is for you, not the visitor',
                'Use a single name field, not first and last separately',
                'Explain how you will use a requested phone number and whether a call is necessary',
                'Ask for country only when it is needed, and let the visitor correct any suggested value',
            ] },

            { type: 'h2', text: 'Trust signals are infrastructure, not decoration' },
            { type: 'p', text: 'Trust signals are the small, unsexy details that tell a visitor you are a real business: a visible physical address, a working phone number, an SSL padlock, a privacy policy that is actually linked, recognizable payment logos, and a real human in the About page. None of these are dramatic on their own. Their absence is.' },
            { type: 'p', text: 'For Malaysian and Southeast Asian markets specifically, displaying local payment options like FPX, GrabPay, or Touch \'n Go eWallet matters more than yet another credit card logo. Localized trust signals beat generic ones every time.' },

            { type: 'h2', text: 'Speed is a conversion feature, not a technical metric' },
            { type: 'p', text: 'Slow loading can interrupt a visitor before they reach the offer or form. Measure the page on the devices and connections your audience uses, then review speed and enquiry completion after changes.' },
            { type: 'p', text: 'Start with oversized images, unnecessary scripts, caching, and content that moves while loading. Agree performance targets from measurements instead of assuming the same target fits every site.' },

            { type: 'h2', text: 'The AI-era visitor arrives pre-informed' },
            { type: 'p', text: 'Some visitors may arrive after researching the business in an AI assistant. Make it easy for them to check the source information on your own site.' },
            { type: 'p', text: 'Publish current prices or explain how quotes are prepared, state the deliverables clearly, and provide a working contact route. Correct misleading descriptions of your business wherever you can, including in directories and profiles you control.' },
            { type: 'quote', text: 'In 2026, the visitor with the highest intent is also the most impatient. Design for the one who has already done their homework and just wants to confirm they are in the right place.', cite: 'Orion Automation' },

            { type: 'h2', text: 'Where to start tomorrow' },
            { type: 'p', text: 'You do not need a redesign to lift conversions meaningfully. You need an honest audit and the discipline to remove things. Open your site on a phone, time the hero load, count the CTAs above the fold, count the form fields, and check whether the social proof is specific enough to be believed. The list of fixes will write itself — and most of them will ship in a week, not a quarter.' },
            { type: 'cta', text: 'Want a no-fluff conversion audit of your current site?', to: '/website', label: 'Explore Website Services' },
        ],
    },

    {
        slug: 'core-web-vitals-2026',
        title: 'Core Web Vitals and Web Performance in 2026: The Practical Cheat Sheet for Business Owners',
        description:
            'A plain-English guide to LCP, INP, CLS, and TTFB in 2026 — what the numbers mean, why they move SEO and conversions, and the highest-leverage fixes for non-technical business owners.',
        keywords:
            'Core Web Vitals 2026, LCP, INP, CLS, TTFB, page speed, web performance, Google ranking signal, conversion rate, bounce rate, image optimization, JavaScript bloat, web hosting Malaysia, Orion Automation',
        author: 'Orion Automation Team',
        category: 'Websites',
        readMinutes: 8,
        publishedAt: '2026-05-16',
        updatedAt: '2026-10-30',
        cover: '#c8c1af',
        excerpt:
            'LCP, INP, CLS, TTFB — four acronyms that quietly decide whether Google ranks you and whether visitors stay. Here is what each one actually means, the 2026 targets, and the fixes that move the needle.',
        sections: [
            { type: 'p', text: 'Web performance affects how people experience a page. Measuring loading, interaction delay, and layout movement helps identify problems that can interrupt reading, enquiries, or purchases.' },
            { type: 'p', text: 'The problem is the language. LCP, INP, CLS, TTFB — the metrics sound like aerospace acronyms, and most business owners nod through the explanation and approve the invoice anyway. This cheat sheet decodes the four numbers that matter, the targets you should hold your team to in 2026, and the handful of fixes that deliver almost all of the gain.' },

            { type: 'h2', text: 'Why these numbers run your business now' },
            { type: 'p', text: 'Review real-user performance where enough data is available, as well as lab tests. A site-wide summary can hide problems on a particular page, device, or connection.' },
            { type: 'ul', items: [
                'SEO — Core Web Vitals are a confirmed page-experience ranking signal across mobile and desktop search',
                'Conversion: compare completion of enquiries or purchases before and after a performance change',
                'Engagement: look for pages where visitors leave before reaching useful content',
                'Business impact: measure outcomes from your own visitors instead of applying a fixed revenue uplift',
            ] },
            { type: 'p', text: 'Prioritise delays that affect your most useful pages and actions.' },

            { type: 'h2', text: 'LCP: how fast the page feels useful' },
            { type: 'p', text: 'Largest Contentful Paint measures how long it takes for the biggest visible element — usually your hero image, headline, or product photo — to appear on screen. It is the closest single number to "the page loaded."' },
            { type: 'ul', items: [
                'Good: under 2.5 seconds',
                'Needs improvement: 2.5 to 4.0 seconds',
                'Poor: over 4.0 seconds',
            ] },
            { type: 'p', text: 'Check oversized images, server response time, and scripts that delay rendering. Measure each change; an image format change alone does not guarantee a particular improvement.' },

            { type: 'h2', text: 'INP: how fast the page feels alive' },
            { type: 'p', text: 'Interaction to Next Paint measures responsiveness to supported user interactions. When an interaction is slow, inspect the work happening before the page can show the next visual update.' },
            { type: 'ul', items: [
                'Good: under 200 milliseconds',
                'Needs improvement: 200 to 500 milliseconds',
                'Poor: over 500 milliseconds',
            ] },
            { type: 'p', text: 'If interactions are slow, inspect long JavaScript tasks, third-party scripts, and expensive event handlers. A trace from an affected device is more useful than assuming which script caused the delay.' },

            { type: 'h2', text: 'CLS: whether the page misbehaves' },
            { type: 'p', text: 'Cumulative Layout Shift measures unexpected movement — the banner that pushes your "Buy" button down half a second after the page renders, the cookie bar that shoves the headline sideways. CLS is the metric that makes a page feel cheap.' },
            { type: 'ul', items: [
                'Good: under 0.1',
                'Needs improvement: 0.1 to 0.25',
                'Poor: over 0.25',
            ] },
            { type: 'p', text: 'Fixes are usually mechanical: reserve width and height on every image and embed, preload web fonts so text does not reflow, and pin ads, cookie bars, and chat widgets to a fixed slot instead of injecting them mid-render.' },

            { type: 'h2', text: 'TTFB: how fast your server answers the door' },
            { type: 'p', text: 'Time to First Byte is not one of the three Core Web Vitals, but it is the floor under all of them. TTFB measures how long the browser waits between asking for the page and getting the first byte back. If TTFB is bad, LCP cannot be good.' },
            { type: 'ul', items: [
                'Good: under 800ms (under 200ms for cached or static content served via CDN)',
                'Needs improvement: 800ms to 1,800ms',
                'Poor: over 1,800ms',
            ] },
            { type: 'p', text: 'TTFB can be affected by network distance, server processing, caching, and connection setup. Test from locations relevant to your audience before deciding whether a hosting or CDN change is worthwhile.' },

            { type: 'h2', text: 'How to measure without guessing' },
            { type: 'p', text: 'You need two views: lab data (synthetic test in a clean environment) and field data (what your actual visitors experience). Use both, and trust the field data when they disagree.' },
            { type: 'ol', items: [
                'PageSpeed Insights: enter a URL to review lab measurements and any available field data',
                'Google Search Console — Core Web Vitals report under Experience, segmented by mobile and desktop',
                'Chrome DevTools — Lighthouse panel for deep-dive lab audits while you debug',
                'Chrome User Experience Report (CrUX) — the same real-user data Google uses for ranking, viewable in PageSpeed Insights',
            ] },
            { type: 'p', text: 'Test mobile and desktop, and review individual page types. Your audience and their connections may differ from the conditions used in a lab test.' },

            { type: 'h2', text: 'The highest-leverage fixes' },
            { type: 'p', text: 'Use the audit results to prioritise fixes. These are useful areas to inspect, rather than a promise that every site will benefit in the same way:' },
            { type: 'ol', items: [
                'Image optimization — convert hero and product images to AVIF or WebP, serve responsive sizes, and lazy-load anything below the fold',
                'Better hosting plus a CDN — move off cheap shared hosting and put a CDN with regional edge nodes in front of it',
                'JavaScript diet — audit your tag manager, drop unused scripts, defer non-critical third-party code, and split bundles so the main thread is not blocked',
                'Font discipline — self-host one or two web fonts, preload them, and use font-display: swap so text never disappears',
                'Reserve space everywhere — set explicit width and height on images, video, ads, and embeds so nothing shifts the layout after paint',
            ] },
            { type: 'quote', text: 'Review every third-party script: what it does, whether it is needed, and how it affects loading and interaction. Measure before and after removing or deferring it.', cite: 'Orion Automation' },

            { type: 'h2', text: 'What "good" actually looks like in 2026' },
            { type: 'p', text: 'Set performance targets for the pages, devices, and connections your visitors use. The Core Web Vitals thresholds provide a starting point; an individual lab run cannot prove what every visitor experiences.' },
            { type: 'p', text: 'If your current numbers are a long way from that, it is rarely one big fix. It is a stack of small ones — and the order matters. Start with hosting and images, then strip JavaScript, then chase the long tail.' },

            { type: 'h2', text: 'Where to go from here' },
            { type: 'p', text: 'Start with an audit of your current measurements and the pages that matter to your business. Agree which changes to make, then repeat the measurements and review the effect on actual enquiries or purchases.' },
            { type: 'cta', text: 'Discuss a performance review of your current website.', to: '/website', label: 'Explore Website Services' },
        ],
    },

    {
        slug: 'web-accessibility-wcag-2026',
        title: 'Web Accessibility in 2026: A Practical WCAG 2.2 Guide for Business Owners',
        description:
            'A plain-language guide to WCAG 2.2, keyboard navigation, contrast, form labels, and combining automated checks with manual testing.',
        keywords:
            'WCAG 2.2, web accessibility 2026, European Accessibility Act, ADA website lawsuits, accessibility compliance, color contrast, keyboard navigation, alt text, Lighthouse, axe DevTools, Orion Automation',
        author: 'Orion Automation Team',
        category: 'Websites',
        readMinutes: 8,
        publishedAt: '2026-05-15',
        updatedAt: '2026-10-30',
        cover: '#ead6b9',
        excerpt:
            'A practical introduction to WCAG 2.2 and the checks that can make a website easier to read, navigate, and use.',
        sections: [
            { type: 'p', text: 'Accessibility means people with different abilities and ways of using a device can read the content and operate the website. It needs to be considered in design, content, development, and testing.' },
            { type: 'p', text: 'This guide explains WCAG 2.2 AA in plain language, walks through the changes since 2.1, and gives you a practical fix list and testing routine you can run on your own site this week.' },

            { type: 'h2', text: 'Why accessibility matters more in 2026' },
            { type: 'p', text: 'Accessibility requirements depend on the markets you serve, the services you offer, and the rules that apply to the organisation. Check the relevant official guidance and obtain advice for your circumstances instead of treating a general article as a legal assessment.' },
            { type: 'p', text: 'A technical checklist should support, rather than replace, understanding the needs of people using assistive technology. Include key tasks such as finding information, completing a form, and recovering from an error.' },
            { type: 'p', text: 'Do not rely on an overlay or a badge as proof that a website is accessible. Check the underlying page and test it with a keyboard and assistive technology.' },

            { type: 'h2', text: 'What WCAG 2.2 actually is' },
            { type: 'p', text: 'WCAG stands for Web Content Accessibility Guidelines, published by W3C. Use the current guidance and success criteria when planning an assessment, and distinguish a technical accessibility target from any legal requirements that apply to the business.' },
            { type: 'p', text: 'WCAG defines three conformance levels: A, AA, and AAA. State which version and level you are assessing, and do not claim conformance from an automated score alone.' },
            { type: 'p', text: 'The guidelines are organized around four principles, often abbreviated POUR: content must be Perceivable, Operable, Understandable, and Robust. Every success criterion ladders up to one of those four.' },

            { type: 'h2', text: 'What changed from WCAG 2.1 to 2.2' },
            { type: 'p', text: 'When moving from WCAG 2.1 to 2.2, review the added criteria and the level assigned to each one. The following are examples to discuss in the assessment, rather than a complete AA checklist:' },
            { type: 'ul', items: [
                'Focus Not Obscured (2.4.11) — when a user tabs through the page, the focused element cannot be hidden behind a sticky header, cookie banner, or chat widget',
                'Focus Appearance: review the indicator size and contrast, and distinguish this AAA criterion from the criteria required for an AA assessment',
                'Dragging Movements (2.5.7) — anything done by dragging must also work with a single tap or click',
                'Target Size (2.5.8) — interactive elements must be at least 24 by 24 CSS pixels, or have enough spacing around them',
                'Consistent Help (3.2.6) — contact and help links must appear in the same place across pages',
                'Redundant Entry (3.3.7) — do not ask for the same information twice in one session',
                'Accessible Authentication (3.3.8 and 3.3.9) — do not force users to solve cognitive puzzles like remembering a one-time code without paste support',
            ] },
            { type: 'p', text: 'The one removal is 4.1.1 Parsing, which is obsolete because modern browsers handle minor HTML errors gracefully.' },

            { type: 'h2', text: 'The issues that break most sites' },
            { type: 'p', text: 'Include the following checks in an initial review. Finding and fixing them is useful, but this list is not a complete conformance assessment:' },
            { type: 'ol', items: [
                'Low color contrast on body text, buttons, and form labels',
                'Missing or meaningless alt text on informational images',
                'Form inputs without associated labels or visible error messages',
                'Links and buttons whose only label is "click here," "read more," or an icon',
                'Empty page titles, missing language attribute, or jumping heading levels',
                'Keyboard traps in modals, carousels, and chat widgets',
                'Invisible or barely-visible focus states removed by a global CSS reset',
                'ARIA attributes applied incorrectly — overriding the semantics of perfectly good HTML',
            ] },

            { type: 'h2', text: 'The highest-leverage fixes' },
            { type: 'p', text: 'Start with these areas, then review the remaining success criteria and the tasks visitors need to complete. The amount of work depends on the site.' },
            { type: 'p', text: 'Color contrast. Body text needs a contrast ratio of at least 4.5:1 against its background, and large text or UI components need at least 3:1. Light grey on white and beige buttons on cream are the usual culprits. A free tool like the WebAIM Contrast Checker resolves this in minutes.' },
            { type: 'p', text: 'Keyboard navigation. Every interactive element must be reachable and operable with Tab, Shift+Tab, Enter, Space, and arrow keys. No mouse should be required. Test by unplugging yours.' },
            { type: 'p', text: 'Alt text. Informational images need a short, specific description of what they convey, not the file name. Purely decorative images should have an empty alt attribute so screen readers skip them.' },
            { type: 'p', text: 'Focus states. Keep a visible focus indicator and check that focused controls remain visible. Do not remove the outline without providing a suitable replacement.' },
            { type: 'p', text: 'Semantic HTML. Use button for buttons, a for links, h1 through h6 in order, label tied to every form input. This single discipline removes the need for most ARIA and fixes a long tail of issues automatically.' },
            { type: 'p', text: 'ARIA, used sparingly. The first rule of ARIA is: do not use ARIA. Reach for it only when native HTML cannot express the pattern, and never use it to relabel something that already has a correct accessible name. Bad ARIA is worse than no ARIA.' },

            { type: 'h2', text: 'How to test your own site' },
            { type: 'p', text: 'Combine automated checks, manual task testing, and assistive technology. Include the important pages and interactive states, not just the home page.' },
            { type: 'ol', items: [
                'Run Lighthouse in Chrome DevTools on your five most important pages. Aim for 95+ on Accessibility, and read the failing audits — Lighthouse explains each one in plain language.',
                'Install the axe DevTools browser extension and run it on the same pages. Axe catches issues Lighthouse misses, especially around ARIA and form labelling.',
                'Unplug your mouse and tab through each page from top to bottom. You should always see where focus is, never get stuck in a widget, and be able to reach and operate every control.',
                'Turn on your operating system screen reader — VoiceOver on macOS or iOS, Narrator on Windows, TalkBack on Android — and listen to your home page. Confusing or silent links are easy to find this way.',
                'Spot-check color contrast on any text or button you are unsure of with the WebAIM Contrast Checker.',
            ] },
            { type: 'p', text: 'Automated tools identify some issues, but cannot determine whether every description is useful or every task is understandable. Review their findings and carry out manual testing before making any accessibility claim.' },
            { type: 'quote', text: 'Accessibility needs to be part of how a site is built and maintained. Test real tasks, keep a record of issues, and review new content and components as they are added.', cite: 'Orion Automation' },

            { type: 'h2', text: 'Where to start this month' },
            { type: 'p', text: 'If you do nothing else, do these three things in the next 30 days. Run Lighthouse and axe on your top five pages and log every issue. Fix color contrast, alt text, and focus states first — they are usually the cheapest and highest-impact. Then write accessibility into your design and development checklist so new pages do not reintroduce the problems you just fixed.' },
            { type: 'p', text: 'Treat accessibility as ongoing work. Record the scope and limits of an assessment, address the issues found, and give visitors a working way to report barriers.' },
            { type: 'cta', text: 'Want a WCAG 2.2 audit and a clear remediation plan for your site?', to: '/website', label: 'Explore Website Services' },
        ],
    },

    {
        slug: 'answer-engine-optimization-aeo-2026',
        title: 'Answer Engine Optimization (AEO) in 2026: Winning the Zero-Click Search',
        description:
            'How to organise clear, attributable answers for search results, voice queries, and AI assistants, and review where your content is cited.',
        keywords:
            'answer engine optimization, AEO, zero-click search, featured snippets, AI Overviews, voice search SEO, FAQPage schema, HowTo schema, QAPage schema, speakable markup, Perplexity citations, Orion Automation',
        author: 'Orion Automation Team',
        category: 'Modern Marketing',
        readMinutes: 8,
        publishedAt: '2026-05-14',
        updatedAt: '2026-10-30',
        cover: '#f1daac',
        excerpt:
            'How to write clear answers that remain useful when a search service summarises information instead of sending the reader directly to your site.',
        sections: [
            { type: 'p', text: 'A search service may answer a question directly or summarise several sources. A clear answer on your site should therefore identify the business or author, state the facts accurately, and make supporting details easy to check.' },
            { type: 'p', text: 'Answer Engine Optimization is the discipline of being that source. It is not the same as ranking, and it is not the same as the broader generative engine playbook. AEO is sharper: structure your content so a machine can lift a clean, attributable answer out of it. Here is how that works in 2026.' },

            { type: 'h2', text: 'AEO is not SEO, and it is not GEO' },
            { type: 'p', text: 'Three acronyms get blurred constantly. Traditional SEO optimises for a ranked list of links. GEO (Generative Engine Optimization) optimises for being cited inside long-form AI responses. AEO sits between them and is the most surgical of the three: it optimises for a single, extracted answer — the paragraph Google reads to a Pixel user, the bullet list a Perplexity card displays, the sentence Alexa speaks back when the kitchen timer beeps.' },
            { type: 'p', text: 'The implication: AEO rewards precision. A 2,000-word essay can rank well and still lose AEO because no 40-word block inside it stands alone. The unit of work is not the page — it is the answerable passage.' },

            { type: 'h2', text: 'When a search service answers the question directly' },
            { type: 'p', text: 'A visitor may see your business information without opening the website. Consider the following alongside traffic to your own pages:' },
            { type: 'ul', items: [
                'Brand exposure is now a primary KPI, not a vanity one. Being named in an AI Overview is worth real money even without a click.',
                'Conversion has to happen at the SERP. Phone numbers, prices, hours, and short value props need to be inside the answer, not behind it.',
                'You measure share of voice in the answer surface, not just rank position. Track which queries cite you by name across Google, Perplexity, ChatGPT Search, and Copilot.',
            ] },

            { type: 'h2', text: 'Write the answer first, then the article' },
            { type: 'p', text: 'Open an answerable section with a short, direct answer before adding context or examples. Write enough to answer the question accurately rather than targeting a fixed word count for an assumed citation benefit.' },
            { type: 'p', text: 'The pattern that works:' },
            { type: 'ol', items: [
                'H2 phrased as the literal question a customer types or speaks',
                'A single paragraph, 40 to 60 words, that answers it in full and could stand alone if quoted',
                'A short list, table, or comparison that matches the snippet format Google already shows for that query',
                'Deeper explanation, examples, edge cases — for the humans who do click through',
            ] },
            { type: 'p', text: 'If the existing snippet for your target query is a numbered list, write a numbered list. If it is a table, build a table. AEO is mimicry with intent.' },

            { type: 'h2', text: 'Schema that actually moves the needle' },
            { type: 'p', text: 'Structured data should describe the content actually visible on the page. Check the intended use of each type and the current guidance of the platform you want to support:' },
            { type: 'ul', items: [
                'FAQPage: describe questions and answers that are genuinely present on the page, where this type is appropriate; check current platform guidance on supported search features',
                'HowTo: describe a real step-by-step process where appropriate, without assuming it will create a search feature or AI citation',
                'QAPage — for pages structured around a single user-submitted question with one or more community answers. Use this for support forums and community Q&A, not your own marketing FAQs.',
                'Speakable: check the intended use and current platform support before adding this markup',
            ] },
            { type: 'p', text: 'Keep the answer in structured data consistent with the visible answer on the page. Validate the markup, and do not add a type simply because another site uses it.' },

            { type: 'h2', text: 'Design for the voice answer' },
            { type: 'p', text: 'A spoken answer needs to make sense without a page layout or a list of links. Write the essential answer plainly and include the location or service context needed to understand it.' },
            { type: 'p', text: 'Voice-friendly answers obey three rules. Keep the spoken answer to 20-to-30 seconds — roughly two to three sentences. Use conversational phrasing that matches how people actually speak ("how much does it cost to fix" not "cost of repair services"). And resolve location and intent inside the answer itself, because voice queries are overwhelmingly local and immediate.' },

            { type: 'h2', text: 'Earn the Perplexity citation' },
            { type: 'p', text: 'Where an assistant shows supporting sources, check the pages it actually cites for questions relevant to your business. The following editorial checks also make content easier for readers to assess:' },
            { type: 'ul', items: [
                'Visible author byline with a real bio and a linked profile, not "Admin"',
                'Published and updated dates on every post, in both visible text and Article schema',
                'Original data, original quotes, or named expert sources inside the body — engines preferentially cite content that contains something they cannot find elsewhere',
                'A clean URL that describes the answer ("/blog/answer-engine-optimization-aeo-2026" not "/blog/post?id=4719")',
                'A self-contained answer block near the top of the page, ideally within the first viewport',
            ] },

            { type: 'h2', text: 'The business strategy shift behind AEO' },
            { type: 'p', text: 'Zero-click is not a traffic problem. It is a business model question. If most of your customers are going to read your answer without visiting your site, three things have to change in how you operate.' },
            { type: 'p', text: 'First, the homepage stops being the front door. The front door is whatever paragraph the engine quotes, on whatever surface the user is using. Every answer block is a landing page. Second, the conversion mechanism has to follow the user — a click-to-call number, a WhatsApp deep link, a booking widget that survives quotation. Third, you stop measuring SEO success by sessions alone and start measuring it by named-citation share inside answer engines for the queries that drive your revenue.' },
            { type: 'quote', text: 'In a zero-click world, the brand mentioned in the answer wins the customer. The brand ranked tenth on a page nobody scrolled to has already lost.', cite: 'Orion Automation' },

            { type: 'h2', text: 'A 30-day AEO playbook you can actually run' },
            { type: 'p', text: 'Use the following as a first-month work plan. Adjust the number of pages and queries to the time available, and measure the results rather than promising a change in visibility.' },
            { type: 'ol', items: [
                'Audit your top 20 commercial queries — which already trigger an AI Overview, featured snippet, or PAA box, and which competitors are being cited',
                'Rewrite the matching pages so each section opens with a 40-to-60-word direct answer that mirrors the question wording',
                'Add or fix FAQPage, HowTo, Article, and Organization schema, and validate every page in Google\'s Rich Results Test',
                'Build a real "answers" hub — one URL per high-value question, internally linked from the relevant service pages',
                'Set up a weekly citation check — pose your top 20 queries to Google AI Mode, Perplexity, ChatGPT Search, and Copilot, and log who they name',
                'Repeat monthly, prioritising the queries where you are absent or out-ranked by competitors with thinner content',
            ] },
            { type: 'p', text: 'Keep a record of content changes and citation checks over time. Assistant responses can vary, so use repeated checks and actual enquiries alongside any change in visibility.' },
            { type: 'cta', text: 'Ready to win the answer, not just the rank?', to: '/marketing', label: 'Explore Modern Marketing' },
        ],
    },

    {
        slug: 'generative-engine-optimization-geo-2026',
        title: 'Generative Engine Optimization (GEO): Becoming the Brand AI Recommends in 2026',
        description:
            'A 2026 deep dive on Generative Engine Optimization: how to get your brand named, cited, and recommended inside ChatGPT, Claude, Gemini, and Perplexity answers.',
        keywords:
            'generative engine optimization, GEO 2026, AI brand visibility, ChatGPT recommendations, Perplexity citations, Claude AI SEO, llms.txt, brand entity SEO, share of voice AI, Orion Automation',
        author: 'Orion Automation Team',
        category: 'Modern Marketing',
        readMinutes: 9,
        publishedAt: '2026-05-13',
        updatedAt: '2026-10-30',
        cover: '#dac4b3',
        excerpt:
            'Ranking on page one is no longer the prize. The prize is being the brand a generative AI names when a buyer asks for a recommendation. Here is the 2026 playbook for getting there.',
        sections: [
            { type: 'p', text: 'A buyer in 2026 rarely opens a tab to ten blue links. They ask ChatGPT for the three best CRMs for a 20-person agency, or they ask Perplexity which automation studio in Kuala Lumpur ships fastest, or they ask Claude to compare two shortlisted vendors. The model answers in a paragraph, names two or three brands, and the conversation ends. If your name is not in that paragraph, you were never in the consideration set.' },
            { type: 'p', text: 'Generative Engine Optimization (GEO) is the practice of becoming the brand the model names. It is not a rebrand of SEO, and it is not the same as optimising for zero-click snippets. It is a strategic problem about brand entity, citation footprint, and the signals a language model uses to decide whose name to put in its answer. Here is what is actually working.' },

            { type: 'h2', text: 'What GEO is, and what it is not' },
            { type: 'p', text: 'GEO is used to describe work intended to improve how a business or its content appears in generative search answers. A useful starting point is accurate business information, understandable content, and sources a reader can check.' },
            { type: 'p', text: 'But GEO is broader than on-page tweaks. Classic SEO optimises a URL to rank. Answer Engine Optimization optimises a snippet to be lifted. GEO optimises a brand entity so a generative model, having read tens of thousands of pages about your category, decides your name belongs in the recommendation set. The unit of work is not a page. It is a reputation.' },

            { type: 'h2', text: 'Why being mentioned beats being linked' },
            { type: 'p', text: 'Traditional SEO ran on backlinks as the dominant authority signal. Generative engines read the open web as text, and they care about co-occurrence: how often your brand name appears next to your category, competitors, and the buying intent phrases your customers actually use. A nofollow mention in a respected newsletter is worth more in 2026 than a dofollow link from a dead directory. Three patterns do the heavy lifting:' },
            { type: 'ul', items: [
                'Frequency — how often your brand is named in the corpus the model trained or retrieves on',
                'Proximity — how tightly your name co-occurs with the category phrase a buyer would ask about',
                'Sentiment — whether the surrounding language frames you as a leader, a niche choice, or a cautionary tale',
            ] },
            { type: 'p', text: 'You cannot fake any of these three at scale. You can, however, deliberately seed them in the places models read most.' },

            { type: 'h2', text: 'The sources LLMs actually cite' },
            { type: 'p', text: 'The sources cited by an assistant vary with the question, product, and available information. Check the actual sources shown for the queries relevant to your business instead of assuming one platform or publication dominates every topic.' },
            { type: 'p', text: 'Translation for a brand building share of voice:' },
            { type: 'ul', items: [
                'A clean Wikipedia entity for your company, founder, or category-defining product is a force multiplier',
                'Sustained, non-spammy participation in the two or three subreddits your buyers actually read shows up in answers',
                'A presence in the top three to five trade publications in your category is worth more than ten generic guest posts',
                'Review platforms: maintain accurate profiles on services relevant to your business and request honest feedback without promising a citation benefit',
            ] },

            { type: 'h2', text: 'Brand entity strength: the foundation' },
            { type: 'p', text: 'Before a model can recommend you, it has to know who you are with confidence. That confidence comes from entity clarity: a consistent, machine-readable identity across the web. The signals are unglamorous but cumulative.' },
            { type: 'ol', items: [
                'A single canonical brand name, used identically on your site, Google Business Profile, LinkedIn, Crunchbase, and every directory you appear in',
                'Organization and Person schema with sameAs links to every legitimate profile you own',
                'Public knowledge profiles: use them only where the business meets the platform rules, and do not invent entries to imply recognition',
                'Founder and key-personnel pages that disambiguate you from anyone else with the same name',
                'A clear, repeated one-line description of what you do and who you do it for, mirrored across every property',
            ] },
            { type: 'p', text: 'Most teams skip this and wonder why the model hallucinates their category. The fix is not clever prompting — it is fixing the entity.' },

            { type: 'h2', text: 'llms.txt and the emerging access stack' },
            { type: 'p', text: 'An llms.txt file is a proposed way to provide a short, curated guide to website content for language-model tools. Check whether a tool you intend to support actually uses it before prioritising the work.' },
            { type: 'p', text: 'Publishing this file does not guarantee that an assistant will read or cite it. Keep normal navigation, crawl access, accurate page content, and the sitemap working first.' },

            { type: 'h2', text: 'Make content easier to understand and check' },
            { type: 'p', text: 'These content checks can help readers understand and verify a page. They are useful editorial practices, rather than a formula for receiving AI citations:' },
            { type: 'ul', items: [
                'Current: review time-sensitive details and show a meaningful update date only when the content has actually been reviewed or changed',
                'Source-rich: cite the evidence behind factual claims, use permissioned quotations, and distinguish research from opinion',
                'Structurally clean — clear H2 questions, direct two-to-three sentence answers, and bulleted summaries that a model can lift cleanly',
                'Author-attributed — bylines from a real, traceable expert with a track record in the topic',
                'Self-contained — answers that do not require clicking three other pages to make sense',
            ] },
            { type: 'p', text: 'A useful test: paste your page into a model and ask it to summarise the key claims with citations. If it cannot, neither will the engine that surfaces your competitor instead.' },

            { type: 'h2', text: 'Measuring share of voice inside AI answers' },
            { type: 'p', text: 'You cannot improve what you do not watch. A new category of tools — Otterly, Frizerly, Profound, HubSpot AEO, Frase — runs buyer queries against ChatGPT, Claude, Gemini, and Perplexity on a schedule and reports four numbers that matter.' },
            { type: 'ol', items: [
                'Mention rate — the percentage of relevant queries that name your brand at all',
                'Citation rate — the percentage that link to a page you own',
                'Position — whether you are named first, second, or buried in a long list',
                'Share of voice — your mention rate divided by the combined mention rate of your defined competitor set',
            ] },
            { type: 'p', text: 'A manual starting point is to write a small set of questions your customers ask, run them in the tools you already use, and record the answers and cited sources. Repeat the same checks over time, noting that responses can vary.' },
            { type: 'quote', text: 'Backlinks were the currency of the last decade of search. Brand mentions, in the right places, by the right voices, are the currency of generative AI. You cannot buy your way in; you have to be worth talking about.', cite: 'Orion Automation' },

            { type: 'h2', text: 'An example 90-day GEO work plan' },
            { type: 'p', text: 'Most GEO advice is 40 tactics with no sequence. Here is the order that compounds.' },
            { type: 'ol', items: [
                'Weeks 1-2: review the business name, contact details, relevant structured data, and genuine public profiles',
                'Weeks 3-4: Audit 20 buyer prompts across ChatGPT, Claude, Gemini, and Perplexity; baseline your share of voice',
                'Weeks 5-8: Refresh your ten most strategic pages — recency, original stats, named author, clean structure, self-contained answers',
                'Weeks 6-10: approach relevant publications with useful, evidence-based contributions, without assuming they will publish or cite them',
                'Weeks 8-12: Activate review platforms (G2, Capterra, Trustpilot) and the two subreddits your buyers actually read',
                'Week 12: Re-run the prompt audit, compare to baseline, and double down on the two tactics that moved your share most',
            ] },
            { type: 'p', text: 'Review progress over time without promising a fixed result or deadline. Record the queries used, the responses observed, the sources cited, and any change in relevant enquiries.' },

            { type: 'h2', text: 'Where GEO is heading' },
            { type: 'p', text: 'Assistant products and their source selection can change. Keep checking what they say about the business, correct inaccurate information on properties you control, and avoid treating an isolated mention as a permanent ranking.' },
            { type: 'p', text: 'The winners in 2026 will not be the loudest or the most heavily backlinked. They will be the brands a model can confidently identify, the brands the right third parties keep talking about, and the brands whose content is structured to be lifted into an answer. That is what GEO is for.' },
            { type: 'cta', text: 'Want a GEO audit of your brand\'s share of voice in ChatGPT, Claude, Gemini, and Perplexity?', to: '/marketing', label: 'Explore Modern Marketing' },
        ],
    },

    {
        slug: 'local-seo-2026',
        title: 'Local SEO in 2026: Dominating Google Maps, Voice Search, and AI Recommendations',
        description:
            'A locally-focused 2026 playbook for SMBs covering Google Business Profile mastery, NAP consistency, review velocity, voice search, Apple Maps, Bing Places, and how AI assistants like ChatGPT and Perplexity recommend local businesses.',
        keywords:
            'local SEO 2026, Google Business Profile, Google Maps ranking, near me search, voice search SEO, AI local recommendations, Apple Business Connect, Bing Places, Malaysia local SEO, review velocity, NAP consistency, Orion Automation',
        author: 'Orion Automation Team',
        category: 'Modern Marketing',
        readMinutes: 8,
        publishedAt: '2026-05-12',
        updatedAt: '2026-10-30',
        cover: '#c8c1af',
        excerpt:
            'A practical review of business listings, contact information, genuine reviews, and local pages that help customers find and check a business.',
        sections: [
            { type: 'p', text: 'A customer looking for a nearby business may use a search engine, map, directory, or AI assistant. Accurate details on your own website and business profiles help them check what you offer and how to contact you.' },
            { type: 'p', text: 'The good news for small and mid-sized businesses: the fundamentals still pay, but they now compound across more surfaces. This is the operator\'s playbook for owning local visibility in 2026 — from Google Business Profile mastery to AI map overlays, with concrete next steps you can ship this quarter.' },

            { type: 'h2', text: 'Areas to review in local search' },
            { type: 'p', text: 'Do not treat an estimated ranking-factor percentage as a rule for your business. Review these areas together and measure the enquiries they support:' },
            { type: 'ul', items: [
                'Google Business Profile: accurate categories, business details, services, and eligible location information',
                'Website content: useful service and location information with working navigation',
                'Reviews: genuine customer feedback and helpful responses',
                'Links: relevant mentions from real local organisations and publications',
                'Customer actions: calls, bookings, direction requests, and enquiries that you can measure',
                'Business listings: consistent name, address where public, phone number, and website',
                'Search context: results can differ by the query and the location of the person searching',
            ] },
            { type: 'p', text: 'Keep the profile complete and review it when services, hours, or contact details change. Use actual customer questions and enquiry records to decide which information needs attention.' },

            { type: 'h2', text: 'Keep your Google Business Profile accurate' },
            { type: 'p', text: 'A useful profile helps someone decide whether the business meets their needs and how to take the next step. Check the details rather than assuming visibility alone will create enquiries.' },
            { type: 'p', text: 'Run this checklist on every location you operate:' },
            { type: 'ol', items: [
                'Primary and secondary categories are precise — "Halal Restaurant" beats "Restaurant" for a halal kitchen in Shah Alam',
                'Services and products are fully populated with descriptions, prices, and photos',
                'Hours are accurate for every public holiday — Malaysia\'s calendar is dense, and one wrong Hari Raya entry costs you a week of trust',
                'Use genuine, current photos of the business, work, team, or products where you have permission to publish them',
                'Q&A section seeded with your real top 10 questions — and answered by you, not strangers',
                'Publish relevant updates when there is something useful to tell customers, rather than posting to meet a ranking target',
                'Booking, menu, or quote link wired up if your industry supports it',
                'Use the contact and booking options currently supported by the platform, with a clear plan for handling enquiries',
            ] },

            { type: 'h2', text: 'Keep contact information consistent' },
            { type: 'p', text: 'NAP means name, address, and phone number. Use consistent, accurate business details on the website and the listings you control, and check for outdated or duplicate profiles.' },
            { type: 'p', text: 'For a Malaysia or SE Asia SMB, the minimum citation footprint is Google Business Profile, Apple Business Connect, Bing Places, Facebook, Instagram, your industry directory (Foodpanda, Lazada, Carousell, Atlas Obscura, whatever applies), and your own website schema markup. Pick one source of truth — a master spreadsheet or a tool like Yext, BrightLocal, or PinMeTo — and push from there.' },

            { type: 'h2', text: 'Request and respond to genuine reviews' },
            { type: 'p', text: 'Reviews should come from genuine customers. Ask for feedback through an ordinary follow-up process, without paying for positive ratings or writing reviews on a customer\'s behalf.' },
            { type: 'p', text: 'Avoid setting a review quota that encourages staff to pressure customers or fabricate activity. Make requests consistently and follow the review platform\'s current rules:' },
            { type: 'ul', items: [
                'Trigger a review request at the moment of peak customer happiness — invoice paid, dish finished, project delivered',
                'Use a short link (g.page/r/...) so customers land directly on the review form',
                'Ask genuine customers for feedback at a suitable point in the service, without requiring a positive rating',
                'Respond to 100% of reviews within 48 hours, including the five-star ones',
                'Respond to the actual feedback and respect the customer\'s privacy',
                'For negative reviews, respond publicly with a fix and take the detail offline',
            ] },
            { type: 'quote', text: 'In 2026, your review pipeline is a product. If it is not running on a schedule with named owners and weekly metrics, it is not running at all.', cite: 'Orion Automation' },

            { type: 'h2', text: 'Voice search and nearby queries' },
            { type: 'p', text: 'A nearby search may include a service, location, opening time, or other practical condition. Make those details clear and accurate instead of relying on a general claim about search volume.' },
            { type: 'p', text: 'Voice queries are longer, more conversational, and more specific. "Where can I get my phone screen repaired in Bangsar before 7pm" is a different beast from "phone repair". Three things make your business voice-friendly:' },
            { type: 'ul', items: [
                'A clean FAQ page on your site, written in the exact language a customer would say out loud',
                'LocalBusiness schema markup that exposes hours, services, and geo coordinates to assistants',
                'Honest, current hours on GBP — "open now" filtering removes you the moment your hours go stale',
            ] },

            { type: 'h2', text: 'Getting recommended by ChatGPT, Perplexity, and AI Overviews' },
            { type: 'p', text: 'Check the responses to questions relevant to your own services and area. Record which businesses and sources appear, and whether the details about your business are correct. These results can vary between assistants and over time.' },
            { type: 'p', text: 'The play is different from classic SEO. You are not chasing keywords; you are chasing being mentioned, in context, on sources the model trusts:' },
            { type: 'ol', items: [
                'Map the questions your customers ask AI assistants — "best ramen near Mont Kiara", "cheapest car wash open Sunday in PJ" — and make sure your site answers them directly',
                'Earn mentions on regional editorial sites, local blogs, "best of" lists, and association pages — these are AI training and retrieval sources',
                'Publish primary-source content: your own data, your own photos, your own opinions on the local scene — AI cites distinctive voices, not generic copy',
                'Keep information consistent across the web — contradiction is a citation killer',
                'Test monthly: ask the major assistants the questions a customer would, and log whether your name appears',
            ] },

            { type: 'h2', text: 'Apple Maps and Bing Places: the surfaces everyone ignores' },
            { type: 'p', text: 'Review your Apple Maps listing if customers use it to find the business. Check the current business-management service and its eligibility rules, and keep public contact and location details accurate.' },
            { type: 'p', text: 'Review Bing Places where it is relevant to your customers. Check its current listing process and keep the information consistent with your website.' },
            { type: 'p', text: 'Check the current import and verification options on each platform. Review any imported information before publishing it.' },

            { type: 'h2', text: 'Hyper-local content that earns clicks and citations' },
            { type: 'p', text: 'Create location pages only for areas you genuinely serve. Include useful details you can verify rather than duplicating a generic page with a different place name:' },
            { type: 'ul', items: [
                'Location pages with unique copy, embedded map, parking directions, public transport options, and neighbourhood-specific testimonials',
                '"Best of [neighbourhood]" guides written from your team\'s point of view — these earn backlinks and AI citations',
                'Case studies tied to specific suburbs, with the customer\'s permission to name the area',
                'Event posts when you sponsor or attend something local — concerts, festivals, school fairs',
                'Photos geo-tagged and uploaded to GBP weekly',
            ] },

            { type: 'h2', text: 'Your first 90 days' },
            { type: 'p', text: 'You cannot do all of this at once, and you should not try. Sequence the work:' },
            { type: 'ol', items: [
                'Days 1-14 — full audit of GBP, Apple Business Connect, Bing Places, and NAP across the top 20 directories',
                'Days 15-30: correct categories, services, photos, hours, and relevant structured data, and test the available contact routes',
                'Days 31-60 — launch the review pipeline with an SOP, a request automation, and a response-time SLA',
                'Days 61-90 — ship three hyper-local content pages, run the first AI-visibility audit across ChatGPT, Perplexity, and Gemini, and lock in monthly reporting',
            ] },
            { type: 'p', text: 'Three months in, you will have a profile, a process, and a dashboard. From there, local SEO stops being a project and becomes a habit — the same way a clean kitchen stops being a deep clean and becomes a routine.' },
            { type: 'cta', text: 'Want a local visibility audit across Google, Apple, Bing, and the major AI assistants? Our team will map exactly where you show up, where you do not, and what to fix first.', to: '/marketing', label: 'Explore Modern Marketing' },
        ],
    },
];

export const getAllPosts = () =>
    [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);

export const getRelatedPosts = (slug, limit = 3) =>
    posts
        .filter((p) => p.slug !== slug)
        .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
        .slice(0, limit);

export default posts;
