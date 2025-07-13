import React from 'react';
import styles from './TestimonialCard.module.scss';

interface TestimonialCardProps {
    testimonial: {
        id: number;
        name: string;
        avatar: string;
        content: string;
        courseName: string;
        completionDate: string;
    };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    const { name, content, courseName, completionDate } = testimonial;
    return (
        <div className={styles.testimonialCard}>
            {/* <img src={avatar} alt={name} className={styles.avatar} /> */}
            <div className={styles.content}>
                "{content}"
            </div>
            <div className={styles.courseInfo}>
                <span className={styles.courseName}>{courseName}</span>
                <span className={styles.completionDate}>{completionDate}</span>
            </div>
            <div className={styles.name}>{name}</div>
        </div>
    );
};

export default TestimonialCard; 