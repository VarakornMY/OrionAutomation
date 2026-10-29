import React, { useEffect, useRef } from 'react';
import '../styles/supporting.css';

let openDialogs = 0;
let previousOverflow = '';

const AccessibleModal = ({ isOpen, onClose, titleId, children }) => {
    const ref = useRef(null);
    useEffect(() => {
        const dialog = ref.current;
        if (!isOpen || !dialog) return undefined;
        const previousFocus = document.activeElement;
        if (openDialogs++ === 0) {
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }
        dialog.showModal();
        return () => {
            dialog.close();
            if (--openDialogs === 0) document.body.style.overflow = previousOverflow;
            if (previousFocus?.isConnected) previousFocus.focus();
        };
    }, [isOpen]);

    return (
        <dialog ref={ref} className="support-dialog" aria-labelledby={titleId}
            onCancel={(event) => { event.preventDefault(); onClose(); }}
            onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
            <div className="support-dialog__content">
                <button className="support-dialog__close" type="button" onClick={onClose} aria-label="Close dialog" autoFocus><span aria-hidden="true" /></button>
                {children}
            </div>
        </dialog>
    );
};

export default AccessibleModal;
