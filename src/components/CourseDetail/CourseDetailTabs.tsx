import React, { useEffect, useRef } from 'react';
import styles from './CourseDetailTabs.module.scss';
import CourseAbout from './CourseAbout';
import CourseCurriculum from './CourseCurriculum';
import CourseFAQ from './CourseFAQ';
import CourseReviews from './CourseReviews';
import CourseResources from './CourseResources';
import CourseDiscussions from './CourseDiscussions';

const tabLabels = [
    { key: 'about', label: 'Giới thiệu' },
    { key: 'curriculum', label: 'Nội dung' },
    { key: 'faq', label: 'FAQ' },
    { key: 'reviews', label: 'Đánh giá' },
    { key: 'resources', label: 'Tài liệu' },
    { key: 'discussions', label: 'Thảo luận' },
];

interface Props {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    course?: any;
}

const CourseDetailTabs: React.FC<Props> = ({ activeTab, setActiveTab, course }) => {
    const tabsRef = useRef<HTMLDivElement>(null);
    const activeTabRef = useRef<HTMLButtonElement>(null);

    const about = course?.about || '';
    const curriculum = Array.isArray(course?.curriculum) ? course.curriculum : [];
    const faq = Array.isArray(course?.faq) ? course.faq : [];
    const reviews = Array.isArray(course?.reviews) ? course.reviews : [];
    const resources = Array.isArray(course?.resources) ? course.resources : [];
    const discussions = Array.isArray(course?.discussions) ? course.discussions : [];

    useEffect(() => {
        if (activeTabRef.current) {
            const container = tabsRef.current;
            const activeButton = activeTabRef.current;

            if (container && activeButton) {
                const containerRect = container.getBoundingClientRect();
                const buttonRect = activeButton.getBoundingClientRect();

                const scrollLeft = activeButton.offsetLeft - (containerRect.width / 2) + (buttonRect.width / 2);

                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeTab]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'about':
                return <CourseAbout about={about} />;
            case 'curriculum':
                return <CourseCurriculum curriculum={curriculum} />;
            case 'faq':
                return <CourseFAQ faq={faq} />;
            case 'reviews':
                return <CourseReviews reviews={reviews} />;
            case 'resources':
                return <CourseResources resources={resources} />;
            case 'discussions':
                return <CourseDiscussions discussions={discussions} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabsWrapper}>
                <div className={styles.tabs} ref={tabsRef}>
                    {tabLabels.map(tab => (
                        <button
                            key={tab.key}
                            ref={activeTab === tab.key ? activeTabRef : null}
                            className={`${styles.tab} ${activeTab === tab.key ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            <span className={styles.tabLabel}>{tab.label}</span>
                            {activeTab === tab.key && <div className={styles.activeIndicator} />}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.tabContent}>
                {renderTabContent()}
            </div>
        </div>
    );
};

export default CourseDetailTabs; 