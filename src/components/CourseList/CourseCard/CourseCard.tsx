import React, { useState } from 'react';
import styles from './CourseCard.module.scss';
import { Card, CardMedia, CardContent, IconButton, Button, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../../hooks/useFavorites';
import { useViewedCourses } from '../../../hooks/useViewedCourses';

interface CourseCardProps {
    course: {
        id: number;
        title: string;
        description?: string;
        author: string;
        price: number;
        rating: number;
        image?: string;
        lessons?: number;
        duration?: string;
        badge?: string;
    };
}

const fallbackImage = '/public/product/course1.jpg';

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const {
        title,
        description = 'Nền tảng giao tiếp vững chắc.',
        author,
        price,
        rating,
        image,
        lessons = 24,
        duration = '12 giờ',
        badge,
    } = course as any;
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(course.id);
    const handleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleFavorite(course.id);
        window.dispatchEvent(new CustomEvent('toast', { detail: isFavorite ? 'Đã bỏ khỏi danh sách yêu thích!' : 'Đã thêm vào danh sách yêu thích!' }));
    };
    const { addViewedCourse } = useViewedCourses();
    return (
        <div style={{ textDecoration: 'none' }}>
            <Card className={styles.courseCard} elevation={0} tabIndex={0} aria-label={`Khóa học: ${title}`}>
                <div className={styles.imageWrapper}>
                    <CardMedia
                        component="img"
                        image={image || fallbackImage}
                        alt={title}
                        className={styles.image}
                        onError={(e: any) => { e.target.onerror = null; e.target.src = fallbackImage; }}
                    />
                    {badge && (
                        <Chip label={badge} className={styles.badgeOverlay} size="small" />
                    )}
                    <IconButton
                        className={styles.favoriteBtn}
                        aria-label={isFavorite ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}
                        onClick={handleFavorite}
                        tabIndex={0}
                    >
                        {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
                <CardContent
                    className={styles.content}
                    onClick={() => {
                        addViewedCourse(course.id);
                        window.location.href = `/courses/${course.id}`;
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <div className={styles.title} title={title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoRow}>
                            <span className={styles.infoItem}><PersonIcon fontSize="small" /> {author}</span>
                            <span className={styles.infoItem}>· {lessons} buổi</span>
                        </div>
                        <div className={styles.infoRow}>
                            <span className={styles.infoItem}><StarIcon fontSize="small" style={{ color: '#F7C873' }} /> {rating}/5</span>
                            <span className={styles.infoItem}>· {duration} học</span>
                        </div>
                    </div>
                    <div className={styles.actionRow}>
                        <span className={styles.price}>{price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                        <Button className={styles.ctaBtn} variant="contained" color="primary" size="small">Đăng ký ngay</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CourseCard; 