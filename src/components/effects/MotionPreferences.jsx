import React, { createContext, useContext, useEffect, useState } from 'react';

const MotionContext = createContext({ enabled: false, finePointer: false, toggle: () => {} });
export const useSiteMotion = () => useContext(MotionContext);

export function MotionPreferences({ children }) {
    const [ready, setReady] = useState(false);
    const [reduced, setReduced] = useState(true);
    const [paused, setPaused] = useState(false);
    const [finePointer, setFinePointer] = useState(false);
    useEffect(() => {
        const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
        const update = () => { setReduced(motion.matches); setFinePointer(pointer.matches); };
        update();
        try { setPaused(localStorage.getItem('orion-motion-paused') === 'true'); } catch { /* Storage may be unavailable. */ }
        setReady(true);
        motion.addEventListener('change', update);
        pointer.addEventListener('change', update);
        return () => { motion.removeEventListener('change', update); pointer.removeEventListener('change', update); };
    }, []);
    const toggle = () => setPaused(value => {
        try { localStorage.setItem('orion-motion-paused', String(!value)); } catch { /* Keep the control usable without storage. */ }
        return !value;
    });
    return <MotionContext.Provider value={{ enabled: ready && !reduced && !paused, finePointer, toggle, reduced, paused }}>{children}</MotionContext.Provider>;
}

export function MotionToggle() {
    const { toggle, reduced, paused } = useSiteMotion();
    return <button type="button" className="motion-toggle" onClick={toggle} disabled={reduced} aria-pressed={paused || reduced} aria-label={reduced ? 'Motion reduced by system preference' : paused ? 'Enable visual effects' : 'Pause visual effects'}>
        <span className={`motion-indicator ${paused || reduced ? 'is-paused' : ''}`} aria-hidden="true"><i /><i /><i /></span>
        <span>{paused || reduced ? 'Motion off' : 'Motion on'}</span>
    </button>;
}
