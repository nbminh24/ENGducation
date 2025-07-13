import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { fetchCourses } from '../services/mockApi';
import { useMyCourses } from '../hooks/useMyCourses';
import CourseList from '../components/CourseList/CourseList';

const MyCoursesScreen: React.FC = () => {
    const { myCourses } = useMyCourses();
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses().then((all: any[]) => {
            setCourses(all.filter((c: any) => myCourses.includes(c.id)));
            setLoading(false);
        });
    }, [myCourses]);

    return (
        <>
            <Navbar />
            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '0 0 32px 0' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 0' }}>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 24 }}>Khóa học của tôi</h2>
                    <CourseList search="" setSearch={() => { }} courses={courses} loading={loading} showSearch={false} hideHeaderTabs />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MyCoursesScreen; 