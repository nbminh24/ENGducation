import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'favorite_courses';

export function useFavorites() {
    const [favorites, setFavorites] = useState<number[]>(() => {
        try {
            const stored = localStorage.getItem(FAVORITES_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = useCallback((id: number) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
        );
    }, []);

    return { favorites, toggleFavorite };
} 