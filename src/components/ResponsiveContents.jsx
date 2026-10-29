import React, { useEffect, useState } from 'react';

// Keep long contents lists out of the way on small screens while leaving the
// desktop reading rail open. Native details preserves keyboard interaction.
export default function ResponsiveContents({ children }) {
    const [open, setOpen] = useState(() => window.matchMedia('(min-width: 961px)').matches);
    useEffect(() => {
        const query = window.matchMedia('(min-width: 961px)');
        const change = event => setOpen(event.matches);
        query.addEventListener('change', change);
        return () => query.removeEventListener('change', change);
    }, []);
    return <details open={open} onToggle={event => setOpen(event.currentTarget.open)}>{children}</details>;
}
