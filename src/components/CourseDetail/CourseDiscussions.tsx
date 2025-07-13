import React from 'react';
import styles from './CourseDiscussions.module.scss';
import PersonIcon from '@mui/icons-material/PersonOutline';

const CourseDiscussions: React.FC<{ discussions?: any[] }> = ({ discussions }) => (
    <div className={styles.discussionsList}>
        {(discussions || []).map((item, idx) => (
            <div key={idx} className={styles.discussionCard}>
                <div className={styles.user}><PersonIcon className={styles.userIcon} />{item.user} <span className={styles.time}>({item.time})</span></div>
                <div className={styles.content}>{item.content}</div>
            </div>
        ))}
        {(!discussions || discussions.length === 0) && <div className={styles.noDiscussion}>Chưa có thảo luận nào.</div>}
    </div>
);

export default CourseDiscussions; 