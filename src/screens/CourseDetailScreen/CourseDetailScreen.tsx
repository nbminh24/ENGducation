import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CourseDetailHeader from '../../components/CourseDetail/CourseDetailHeader';
import CourseDetailTabs from '../../components/CourseDetail/CourseDetailTabs';
import { fetchCourses } from '../../services/mockApi';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RecommendedCourses from '../../components/CourseDetail/RecommendedCourses';

const tabKeys = ['about', 'curriculum', 'faq', 'reviews', 'resources', 'discussions'];

const CourseDetailScreen: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(tabKeys[0]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetchCourses().then(data => {
            const found = data.find((c: any) => String(c.id) === String(id));
            setCourse(found);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div style={{ textAlign: 'center', padding: 48 }}>Đang tải thông tin khóa học...</div>;
    if (!course) return <div style={{ textAlign: 'center', color: '#b0b3c6', padding: 48 }}>Không tìm thấy khóa học.</div>;

    return (
        <>
            <Navbar />
            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '0 0 32px 0' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 0' }}>
                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            background: '#f3f4f6',
                            color: '#2563eb',
                            border: 'none',
                            borderRadius: '9999px',
                            padding: '8px 18px',
                            fontWeight: 500,
                            fontSize: '1rem',
                            marginBottom: 24,
                            boxShadow: '0 1px 4px 0 rgba(30,41,59,0.06)',
                            cursor: 'pointer',
                            transition: 'background 0.18s',
                        }}
                        onMouseOver={e => (e.currentTarget.style.background = '#e0e7ff')}
                        onMouseOut={e => (e.currentTarget.style.background = '#f3f4f6')}
                    >
                        <ArrowBackIcon style={{ fontSize: 20, marginRight: 4 }} />
                        Quay lại
                    </button>
                    <CourseDetailHeader course={course} />
                    <div style={{ marginTop: 32 }}>
                        <CourseDetailTabs activeTab={activeTab} setActiveTab={setActiveTab} course={course} />
                    </div>
                    <div style={{ marginTop: 48 }}>
                        <RecommendedCourses excludeId={course.id} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default CourseDetailScreen; 