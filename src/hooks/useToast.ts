import { useState, useRef } from 'react';

export interface ToastItem {
    id: number;
    message: string;
    type: 'info' | 'warning';
}

export function useToast(duration = 3000) {
    const [toasts, setToasts] = useState<ToastItem[]>([]);
    const idRef = useRef(0);

    const addToast = (message: string, type: 'info' | 'warning' = 'info') => {
        const id = idRef.current++;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, duration);
    };

    const removeToast = (id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return { toasts, addToast, removeToast };
}
