import React from 'react';
import styles from './CourseCurriculum.module.scss';

const CourseCurriculum: React.FC<{ curriculum?: any[] }> = ({ curriculum }) => (
    <div className={styles.curriculumList}>
        {(curriculum || []).map((item, idx) => (
            <div key={idx} className={styles.curriculumCard}>
                <span className={styles.weekNum}>{item.week}</span>
                <span className={styles.topicText}>Tuần {item.week}: {item.topic}</span>
            </div>
        ))}
    </div>
);

export default CourseCurriculum; 