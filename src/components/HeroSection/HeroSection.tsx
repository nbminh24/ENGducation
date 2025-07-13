import React from 'react';
import styles from './HeroSection.module.scss';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DevicesIcon from '@mui/icons-material/Devices';

const HeroSection: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>
                    Học tiếng Anh cùng <span className={styles.highlight}>ENGducation</span> mọi lúc, mọi nơi!
                </h1>
                <p className={styles.desc}>
                    Nền tảng khóa học tiếng Anh hiện đại, linh hoạt, phù hợp cho mọi trình độ. Khám phá lộ trình học tập hiệu quả, giáo viên bản ngữ, và cộng đồng học tập năng động.
                </p>
                <div className={styles.highlights}>
                    <div className={styles.highlightBox}>
                        <div className={styles.icon}><StarIcon fontSize="large" /></div>
                        <div className={styles.text}>10,000+ học viên đánh giá 4.8/5</div>
                    </div>
                    <div className={styles.highlightBox}>
                        <div className={styles.icon}><RecordVoiceOverIcon fontSize="large" /></div>
                        <div className={styles.text}>Giáo viên bản ngữ, kết quả thực tế</div>
                    </div>
                    <div className={styles.highlightBox}>
                        <div className={styles.icon}><DevicesIcon fontSize="large" /></div>
                        <div className={styles.text}>Học trên mọi thiết bị</div>
                    </div>
                </div>
                <Button variant="contained" size="large" className={styles.ctaBtn}>
                    Khám phá các khóa học
                </Button>
            </div>
            <div className={styles.illustration}>
                <img src="/Hero_section.png" alt="ENGducation Hero" />
            </div>
        </section>
    );
};

export default HeroSection; 