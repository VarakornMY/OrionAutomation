import React from 'react';
import AnimatedContent from './AnimatedContent';
import { useSiteMotion } from './MotionPreferences';

export default function Reveal({ children, className, ...props }) {
    const { enabled } = useSiteMotion();
    // Keep the wrapper stable when motion preferences change, preserving child state.
    return <AnimatedContent disabled={!enabled} className={className} distance={28} duration={0.7} threshold={0.06} {...props}>{children}</AnimatedContent>;
}
