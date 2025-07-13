import React, { useEffect, useState } from 'react';
import styles from './Toast.module.scss';

const Toast: React.FC = () => {
    const [toasts, setToasts] = useState<string[]>([]);

    useEffect(() => {
        const handler = (e: any) => {
            setToasts(prev => [...prev, e.detail]);
            setTimeout(() => {
                setToasts(prev => prev.slice(1));
            }, 2500);
        };
        window.addEventListener('toast', handler);
        return () => window.removeEventListener('toast', handler);
    }, []);

    return (
        <div className={styles.toastContainer}>
            {toasts.map((msg, idx) => (
                <div key={idx} className={styles.toast}>{msg}</div>
            ))}
        </div>
    );
};

export default Toast; 