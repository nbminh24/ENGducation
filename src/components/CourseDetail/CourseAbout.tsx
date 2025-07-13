import React from 'react';
import styles from './CourseAbout.module.scss';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUpOutlined';

interface CourseAboutProps {
    about?: string;
    course?: any;
}

const highlights = [
    'Học từ cơ bản đến nâng cao',
    'Thực hành dự án thực tế',
    'Chứng chỉ hoàn thành',
    'Hỗ trợ 24/7',
    'Cập nhật nội dung mới nhất',
    'Cộng đồng học viên sôi nổi',
];

const learningOutcomes = [
    'Nắm vững kiến thức nền tảng',
    'Tự tin giao tiếp trong đời sống',
    'Thực hiện được các dự án thực tế',
    'Sẵn sàng cho môi trường làm việc',
];

const CourseAbout: React.FC<CourseAboutProps> = ({ about, course }) => {
    return (
        <div className={styles.aboutRoot}>
            {/* Giới thiệu khóa học */}
            <section className={styles.cardSection}>
                <div className={styles.sectionTitleRow}>
                    <span className={styles.sectionIcon}><SchoolIcon /></span>
                    <span className={styles.sectionTitle}>Giới thiệu khóa học</span>
                </div>
                <div className={styles.sectionContent}>
                    <span className={styles.welcome}>Chào mừng bạn đến với khóa học này! 🎉</span>
                    {about || 'Khóa học này sẽ đồng hành cùng bạn để tự tin giao tiếp tiếng Anh trong các tình huống hàng ngày, từ chào hỏi, mua sắm, hỏi đường đến giao tiếp công sở.'}
                </div>
            </section>

            {/* Điểm nổi bật */}
            <section className={styles.cardSection}>
                <div className={styles.sectionTitleRow}>
                    <span className={styles.sectionIcon}><CheckCircleIcon /></span>
                    <span className={styles.sectionTitle}>Điểm nổi bật</span>
                </div>
                <div className={styles.highlightsRow}>
                    {highlights.map((item, idx) => (
                        <span key={idx} className={styles.highlightPill}>{item}</span>
                    ))}
                </div>
            </section>

            {/* Kết quả học tập */}
            <section className={styles.cardSection}>
                <div className={styles.sectionTitleRow}>
                    <span className={styles.sectionIcon}><TrendingUpIcon /></span>
                    <span className={styles.sectionTitle}>Kết quả học tập</span>
                </div>
                <div className={styles.outcomesCol}>
                    {learningOutcomes.map((item, idx) => (
                        <div key={idx} className={styles.outcomeRow}>
                            <span className={styles.outcomeNum}>{idx + 1}</span>
                            <span className={styles.outcomeText}>{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Closing encouragement */}
            <div className={styles.closingNote}>
                Chúc bạn học tập hiệu quả và luôn giữ vững động lực trên hành trình chinh phục tiếng Anh! 🚀
            </div>
        </div>
    );
};

export default CourseAbout; 