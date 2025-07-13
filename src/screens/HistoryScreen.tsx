import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { mockCourses } from '../services/mockApi';
import { useViewedCourses } from '../hooks/useViewedCourses';
import CourseCard from '../components/CourseList/CourseCard/CourseCard';

const HistoryScreen: React.FC = () => {
    const { viewedCourses } = useViewedCourses();
    const historyCourses = viewedCourses
        .map(id => mockCourses.find(c => c.id === id))
        .filter((c): c is NonNullable<typeof c> => !!c);
    return (
        <>
            <Navbar />
            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '0 0 32px 0' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 24 }}>Lịch sử xem</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 36 }}>
                        {historyCourses.length > 0 ? historyCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        )) : (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#b0b3c6', fontSize: '1.15rem', padding: 48 }}>
                                Bạn chưa xem sản phẩm nào.
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default HistoryScreen; 