import { useState, useEffect, useCallback } from 'react';

const VIEWED_KEY = 'viewed_courses';
const MAX_HISTORY = 20;

export function useViewedCourses() {
    const [viewedCourses, setViewedCourses] = useState<number[]>(() => {
        try {
            const stored = localStorage.getItem(VIEWED_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(VIEWED_KEY, JSON.stringify(viewedCourses));
    }, [viewedCourses]);

    const addViewedCourse = useCallback((id: number) => {
        setViewedCourses(prev => {
            const filtered = prev.filter(cid => cid !== id);
            const updated = [id, ...filtered];
            return updated.slice(0, MAX_HISTORY);
        });
    }, []);

    return { viewedCourses, addViewedCourse };
} 