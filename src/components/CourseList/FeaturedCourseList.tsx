import React, { useEffect, useState } from 'react';
import styles from './CourseList.module.scss';
import CourseCard from './CourseCard/CourseCard';
import { fetchFeaturedCourses } from '../../services/mockApi';

interface FeaturedCourseListProps {
    search: string;
    setSearch: (s: string) => void;
}

const FeaturedCourseList: React.FC<FeaturedCourseListProps> = ({
    search,
    setSearch
}) => {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFeaturedCourses = async () => {
            try {
                const featuredCourses = await fetchFeaturedCourses();
                setCourses(featuredCourses);
            } catch (error) {
                console.error('Error loading featured courses:', error);
            } finally {
                setLoading(false);
            }
        };

        loadFeaturedCourses();
    }, []);

    // Filter courses based on search
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase()) ||
        course.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className={styles.courseList}>
            <div className={styles.header}>
                <h2>Khóa học nổi bật cho bạn</h2>
                <div className={styles.subtitle}>Khám phá lộ trình học tập phù hợp với bạn</div>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: 48 }}>Đang tải...</div>
            ) : (
                <div className={styles.grid}>
                    {filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                    {filteredCourses.length === 0 && (
                        <div style={{ gridColumn: '1/4', textAlign: 'center', color: '#b0b3c6' }}>
                            Không có khóa học phù hợp.
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default FeaturedCourseList; 