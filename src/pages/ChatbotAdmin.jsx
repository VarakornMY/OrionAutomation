import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_ENABLED, sendChatMessage } from '../lib/api';
import '../styles/supporting.css';

const defaults = {
    botName: 'Orion AI',
    aiGoal: 'Provide helpful information about our services and schedule appointments.',
    personality: 'Professional, friendly, and concise.',
    knowledgeBase: 'Services: AI chatbots, website development, marketing and SEO. Contact: marketing@orionautomation.xyz',
};

export default function ChatbotAdmin() {
    const [settings, setSettings] = useState(defaults);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [notice, setNotice] = useState('');
    const endRef = useRef(null);
    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('chatbotSettings') || 'null');
            if (saved && typeof saved === 'object') setSettings({ ...defaults, ...saved });
        } catch { /* An invalid browser draft should not break the editor. */ }
    }, []);
    useEffect(() => { endRef.current?.scrollIntoView({ block: 'nearest' }); }, [messages]);

    async function send(event) {
        event.preventDefault();
        if (!input.trim() || isLoading || !BACKEND_ENABLED) return;
        const text = input.trim();
        const history = messages.map(item => ({ role: item.type === 'user' ? 'user' : 'model', text: item.text }));
        setMessages(current => [...current, { type: 'user', text }]);
        setInput(''); setIsLoading(true);
        try {
            const result = await sendChatMessage({ message: text, history, ...settings }, { asAdmin: true });
            setMessages(current => [...current, { type: 'bot', text: result.reply }]);
        } catch (error) {
            setNotice(error.status === 429 ? 'Please wait a moment before sending another message.' : 'The preview is unavailable. Please try again later.');
        } finally { setIsLoading(false); }
    }

    if (!BACKEND_ENABLED) return <div className="page-shell support-state-page"><section className="container support-state-wrap"><div className="support-state-card"><h1>Chatbot preview</h1><p>This workspace is not available yet. Live chatbot configuration and previews require online administration.</p><Link className="button button-primary" to="/">Back to website</Link></div></section></div>;

    return <div className="page-shell chatbot-workspace"><section className="page-hero container"><h1 className="page-title">Chatbot preview</h1></section><section className="section container chatbot-workspace__grid">
        <form className="surface-card support-form chatbot-settings" onSubmit={event => { event.preventDefault(); localStorage.setItem('chatbotSettings', JSON.stringify(settings)); setNotice('Preview settings saved on this browser. The public assistant has not changed.'); }}>
            <h2>Preview settings</h2>
            {[{name:'botName',label:'Assistant name',rows:0,max:80},{name:'aiGoal',label:'Goal',rows:3,max:2000},{name:'personality',label:'Tone and personality',rows:3,max:2000},{name:'knowledgeBase',label:'Knowledge base',rows:7,max:8000}].map(field=><label className="chatbot-settings__field" key={field.name} htmlFor={`chatbot-${field.name}`}><span>{field.label}</span>{field.rows ? <textarea id={`chatbot-${field.name}`} rows={field.rows} maxLength={field.max} value={settings[field.name]} onChange={event=>setSettings(current=>({...current,[field.name]:event.target.value}))} /> : <input id={`chatbot-${field.name}`} maxLength={field.max} value={settings[field.name]} onChange={event=>setSettings(current=>({...current,[field.name]:event.target.value}))} />}</label>)}
            <button className="button button-primary" type="submit">Save preview settings</button>
            <p className="support-field-hint">Saved settings apply to this browser’s preview. They do not publish changes to the website.</p>
        </form>
        <div className="chatbot-preview surface-card"><h2>{settings.botName || 'Assistant'} preview</h2><div className="chatbot-preview__messages" role="log" aria-live="polite" aria-label="Preview conversation">{messages.length===0 && <p>Send a message to try the assistant.</p>}{messages.map((message,index)=><p className={`chatbot-preview__message chatbot-preview__message--${message.type}`} key={index}>{message.text}</p>)}{isLoading && <p role="status">Preparing a response…</p>}<div ref={endRef} /></div><form className="chatbot-preview__compose" onSubmit={send}><label className="chatbot-preview__input"><span className="sr-only">Your message</span><input value={input} onChange={event=>setInput(event.target.value)} maxLength={1000} placeholder="Ask a question…" /></label><button className="button button-primary" disabled={isLoading || !input.trim()} type="submit">Send</button></form></div>
        <p className="chatbot-workspace__notice" role="status">{notice}</p>
    </section></div>;
}
