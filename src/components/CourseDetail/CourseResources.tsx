import React from 'react';
import styles from './CourseResources.module.scss';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdfOutlined';
import AudiotrackIcon from '@mui/icons-material/AudiotrackOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibraryOutlined';

const getIcon = (name: string) => {
    if (name.toLowerCase().includes('pdf')) return <PictureAsPdfIcon className={styles.iconPdf} />;
    if (name.toLowerCase().includes('audio')) return <AudiotrackIcon className={styles.iconAudio} />;
    if (name.toLowerCase().includes('video')) return <VideoLibraryIcon className={styles.iconVideo} />;
    return <PictureAsPdfIcon className={styles.iconDefault} />;
};

const CourseResources: React.FC<{ resources?: any[] }> = ({ resources }) => (
    <div className={styles.resourcesList}>
        {(resources || []).map((item, idx) => (
            <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                <span className={styles.icon}>{getIcon(item.name)}</span>
                <span className={styles.text}>{item.name}</span>
                <span className={styles.action}>Tải/Xem</span>
            </a>
        ))}
        {(!resources || resources.length === 0) && <div className={styles.noResource}>Chưa có tài liệu nào.</div>}
    </div>
);

export default CourseResources; 