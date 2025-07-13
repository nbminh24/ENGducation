import React from 'react';
import styles from './CourseDetailHeader.module.scss';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import { useMyCourses } from '../../hooks/useMyCourses';

interface CourseDetailHeaderProps {
    course: {
        id: number;
        image?: string;
        title: string;
        rating?: number;
        reviews?: any[];
        author?: string;
        price?: number;
        oldPrice?: number;
        description?: string;
        badge?: string;
        duration?: string;
        lessons?: number;
        level?: string;
    };
}

const CourseDetailHeader: React.FC<CourseDetailHeaderProps> = ({ course }) => {
    const percentOff = course.oldPrice && course.price ? Math.round(100 - (course.price / course.oldPrice) * 100) : 0;
    const { isRegistered, registerCourse } = useMyCourses();
    const registered = isRegistered(course.id);

    return (
        <div className={styles.headerCard}>
            {/* Image + Badges */}
            <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                    <img
                        src={course.image || '/product/course2.jpg'}
                        alt={course.title}
                        className={styles.image}
                        onError={e => { e.currentTarget.src = '/product/course2.jpg'; }}
                    />
                    {course.level && (
                        <div className={styles.levelBadge}>{course.level}</div>
                    )}
                    <div className={styles.ratingBadge}>
                        <StarIcon className={styles.ratingStar} />
                        <span>{course.rating ?? 4.8}</span>
                    </div>
                </div>
            </div>
            {/* Info */}
            <div className={styles.infoSection}>
                <h1 className={styles.title}>{course.title}</h1>
                <div className={styles.metaRow}>
                    <span className={styles.metaItem}><PersonIcon className={styles.metaIcon} /> {course.author}</span>
                    <span className={styles.metaDot}>·</span>
                    <span className={styles.metaItem}><AccessTimeIcon className={styles.metaIcon} /> {course.duration}</span>
                    <span className={styles.metaDot}>·</span>
                    <span className={styles.metaItem}><GroupIcon className={styles.metaIcon} /> {course.lessons} buổi</span>
                    <span className={styles.metaDot}>·</span>
                    <span className={styles.metaItem}><StarIcon className={styles.metaIcon} /> {(course.rating ?? 4.8)} ({Array.isArray(course.reviews) ? course.reviews.length : 0} đánh giá)</span>
                </div>
                <div className={styles.priceRow}>
                    <div className={styles.priceBlock}>
                        {course.oldPrice && (
                            <span className={styles.oldPrice}>{course.oldPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                        )}
                        <span className={styles.price}>{course.price ? course.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : '---'}</span>
                    </div>
                    {percentOff > 0 && (
                        <span className={styles.saveBadge}>Tiết kiệm {percentOff}%</span>
                    )}
                    <button
                        className={styles.buyBtn}
                        disabled={registered}
                        style={registered ? { background: '#b0b3c6', color: '#fff', cursor: 'not-allowed' } : {}}
                        onClick={() => !registered && registerCourse(course.id)}
                    >
                        {registered ? 'Đã đăng ký' : 'Đăng ký'}
                    </button>
                </div>
                {course.description && (
                    <div className={styles.shortDesc}>{course.description}</div>
                )}
            </div>
        </div>
    );
};

export default CourseDetailHeader; 