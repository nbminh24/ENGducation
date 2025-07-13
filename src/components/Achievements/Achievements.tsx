import React, { useEffect, useState } from 'react';
import styles from './Achievements.module.scss';
import { fetchAchievements } from '../../services/mockApi';

const Achievements: React.FC = () => {
    const [data, setData] = useState({ teachers: 0, students: 0, classes: 0, courses: 0 });

    useEffect(() => {
        fetchAchievements().then(setData);
    }, []);

    return (
        <section className={styles.achievements}>
            <div className={styles.stats}>
                <div className={styles.stat}><span>{data.teachers}+</span><br />Teachers</div>
                <div className={styles.stat}><span>{data.students.toLocaleString()}+</span><br />Students</div>
                <div className={styles.stat}><span>{data.classes}+</span><br />Finished Classes</div>
                <div className={styles.stat}><span>{data.courses}+</span><br />Courses</div>
            </div>
        </section>
    );
};

export default Achievements; 