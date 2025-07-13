import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { mockCourses } from '../services/mockApi';
import { useFavorites } from '../hooks/useFavorites';
import CourseCard from '../components/CourseList/CourseCard/CourseCard';

const FavoriteCoursesScreen: React.FC = () => {
    const { favorites } = useFavorites();
    const favoriteCourses = mockCourses.filter(c => favorites.includes(c.id));
    return (
        <>
            <Navbar />
            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '0 0 32px 0' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 24 }}>Danh sách yêu thích</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 36 }}>
                        {favoriteCourses.length > 0 ? favoriteCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        )) : (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#b0b3c6', fontSize: '1.15rem', padding: 48 }}>
                                Bạn chưa có sản phẩm nào trong danh sách yêu thích.
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default FavoriteCoursesScreen; 