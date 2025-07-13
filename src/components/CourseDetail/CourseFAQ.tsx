import React from 'react';
import styles from './CourseFAQ.module.scss';

const CourseFAQ: React.FC<{ faq?: any[] }> = ({ faq }) => (
    <div className={styles.faqList}>
        {(faq || []).map((item, idx) => (
            <div key={idx} className={styles.qaCard}>
                <div className={styles.question}>Q: {item.question}</div>
                <div className={styles.answer}>A: {item.answer}</div>
            </div>
        ))}
    </div>
);

export default CourseFAQ; 