import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'myCourses';

export function useMyCourses() {
    const [myCourses, setMyCourses] = useState<number[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setMyCourses(JSON.parse(stored));
    }, []);

    const registerCourse = useCallback((id: number) => {
        setMyCourses(prev => {
            if (prev.includes(id)) return prev;
            const updated = [...prev, id];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);

    const isRegistered = useCallback((id: number) => myCourses.includes(id), [myCourses]);

    return { myCourses, registerCourse, isRegistered };
} 