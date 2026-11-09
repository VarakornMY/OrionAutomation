import React, { lazy, Suspense } from 'react';
import { useSiteMotion } from './MotionPreferences';

const Silk = lazy(() => import('./Silk'));
const GlowCursor = lazy(() => import('./GlowCursor'));
export default function SiteAtmosphere() {
    const { enabled, finePointer } = useSiteMotion();
    return <>
        <div className="site-atmosphere" aria-hidden="true">
            {enabled && <Suspense fallback={null}><Silk color="#8E635A" sheenColor="#EDB18C" speed={1.2} scale={1.2} noiseIntensity={0.5} glow={0.2} dpr={0.75} mouseInteraction={false} clickRipple={false} intro={false} /></Suspense>}
        </div>
        {enabled && finePointer && <Suspense fallback={null}><GlowCursor className="site-cursor" color="#EC7267" secondaryColor="#EDB18C" intensity={1.1} trailWidth={2} linger={0.7} glow={0.8} quality="low" maxDevicePixelRatio={1} clickBurst={false} aria-hidden="true" /></Suspense>}
    </>;
}
