import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { AdminProvider } from './context/AdminContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import { BACKEND_ENABLED } from './lib/api';
import Home from './pages/Home';
import AIChatbot from './pages/AIChatbot';
import AIAutomation from './pages/AIAutomation';
import Website from './pages/Website';
import Marketing from './pages/Marketing';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminBlog from './pages/AdminBlog';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

// The CMS has its own chrome — hide the public Navbar/Footer/widget there.
const Shell = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');
    const mainRef = useRef(null);
    const previousPath = useRef(location.pathname);

    useEffect(() => {
        const pathChanged = previousPath.current !== location.pathname;
        previousPath.current = location.pathname;
        if (location.hash) {
            const frame = window.requestAnimationFrame(() => {
                document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: 'start' });
            });
            return () => window.cancelAnimationFrame(frame);
        }
        if (!pathChanged) return undefined;
        window.scrollTo(0, 0);
        mainRef.current?.focus({ preventScroll: true });
        return undefined;
    }, [location.pathname, location.hash]);

    return (
        <div className="site-shell">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            {!isAdmin && <Navbar />}
            <main id="main-content" className={`site-main ${isAdmin ? 'is-admin' : ''}`} ref={mainRef} tabIndex={-1}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ai-automation" element={<AIAutomation />} />
                    <Route path="/ai-chatbot" element={<AIChatbot />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/marketing" element={<Marketing />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/admin" element={<AdminBlog />} />
                    <Route path="/admin/blog" element={<AdminBlog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            {!isAdmin && <Footer />}
            {!isAdmin && BACKEND_ENABLED && <ChatbotWidget />}
        </div>
    );
};

export function Site() {
    return (
        <ThemeProvider>
            <UserProvider>
                <AdminProvider>
                    <Shell />
                </AdminProvider>
            </UserProvider>
        </ThemeProvider>
    );
}

function App() {
    return <Router><Site /></Router>;
}

export default App;
