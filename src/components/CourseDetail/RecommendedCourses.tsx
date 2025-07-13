import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RecommendedCourses.module.scss';
import { fetchCourses } from '../../services/mockApi';
import CourseCard from '../CourseList/CourseCard/CourseCard';

interface RecommendedCoursesProps {
    excludeId?: number;
}

const RecommendedCourses: React.FC<RecommendedCoursesProps> = ({ excludeId }) => {
    const [courses, setCourses] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCourses().then(data => {
            const filtered = data.filter((c: any) => c.id !== excludeId);
            setCourses(filtered.slice(0, 4));
        });
    }, [excludeId]);

    if (!courses.length) return null;

    return (
        <section className={styles.recommendSection}>
            <h2 className={styles.title}>Khóa học đề xuất</h2>
            <div className={styles.courseRow}>
                {courses.map(course => (
                    <div key={course.id} className={styles.cardWrapper}>
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
            <div className={styles.viewMoreContainer}>
                <button
                    className={styles.viewMoreButton}
                    onClick={() => navigate('/courses')}
                >
                    Xem thêm khóa học
                </button>
            </div>
        </section>
    );
};

export default RecommendedCourses; 