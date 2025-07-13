import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { fetchSuggestions } from '../services/mockApi';
import { useFavorites } from '../hooks/useFavorites';
import { useViewedCourses } from '../hooks/useViewedCourses';
import CourseCard from '../components/CourseList/CourseCard/CourseCard';

const SuggestionsScreen: React.FC = () => {
    const { favorites } = useFavorites();
    const { viewedCourses } = useViewedCourses();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [suggestions, setSuggestions] = useState<any[]>([]);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetchSuggestions('user1', viewedCourses, favorites)
            .then((data: any) => {
                setSuggestions(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Không thể lấy gợi ý lúc này');
                setLoading(false);
            });
    }, [favorites, viewedCourses]);

    return (
        <>
            <Navbar />
            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '0 0 32px 0' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 24 }}>Gợi ý sản phẩm phù hợp</h2>
                    {loading ? (
                        <div style={{ textAlign: 'center', color: '#b0b3c6', fontSize: '1.15rem', padding: 48 }}>Đang lấy gợi ý...</div>
                    ) : error ? (
                        <div style={{ textAlign: 'center', color: '#ef4444', fontSize: '1.15rem', padding: 48 }}>{error}</div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 36 }}>
                            {suggestions.length > 0 ? suggestions.map(course => (
                                <CourseCard key={course.id} course={course} />
                            )) : (
                                <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#b0b3c6', fontSize: '1.15rem', padding: 48 }}>
                                    Không có sản phẩm gợi ý phù hợp.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default SuggestionsScreen; 