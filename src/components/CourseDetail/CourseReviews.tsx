import React, { useState, useMemo } from 'react';
import styles from './CourseReviews.module.scss';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

interface Review {
    id?: string;
    user: string;
    rating: number;
    comment: string;
    date?: string;
    helpful?: number;
    verified?: boolean;
}

interface CourseReviewsProps {
    reviews?: Review[];
}

const CourseReviews: React.FC<CourseReviewsProps> = ({ reviews }) => {
    const [filterRating, setFilterRating] = useState<number | null>(null);
    const [sortBy, setSortBy] = useState<'date' | 'rating' | 'helpful'>('date');
    const [showFilters, setShowFilters] = useState(false);

    const safeReviews = Array.isArray(reviews) ? reviews : [];

    const avgRating = useMemo(() => {
        if (safeReviews.length === 0) return null;
        return (safeReviews.reduce((sum, r) => sum + (r.rating || 0), 0) / safeReviews.length).toFixed(1);
    }, [safeReviews]);

    const ratingDistribution = useMemo(() => {
        const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        safeReviews.forEach(review => {
            const rating = Math.round(review.rating);
            if (rating >= 1 && rating <= 5) {
                distribution[rating as keyof typeof distribution]++;
            }
        });
        return distribution;
    }, [safeReviews]);

    const filteredAndSortedReviews = useMemo(() => {
        let filtered = safeReviews;

        if (filterRating) {
            filtered = filtered.filter(review => Math.round(review.rating) === filterRating);
        }

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'helpful':
                    return (b.helpful || 0) - (a.helpful || 0);
                case 'date':
                default:
                    return new Date(b.date || '').getTime() - new Date(a.date || '').getTime();
            }
        });
    }, [safeReviews, filterRating, sortBy]);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <StarIcon
                key={i}
                className={`${styles.star} ${i < rating ? styles.filled : styles.empty}`}
            />
        ));
    };

    const renderRatingBar = (rating: number, count: number) => {
        const percentage = safeReviews.length > 0 ? (count / safeReviews.length) * 100 : 0;
        return (
            <div className={styles.ratingBar}>
                <span className={styles.ratingLabel}>{rating} sao</span>
                <div className={styles.barContainer}>
                    <div className={styles.bar} style={{ width: `${percentage}%` }} />
                </div>
                <span className={styles.ratingCount}>{count}</span>
            </div>
        );
    };

    return (
        <div className={styles.reviewsContainer}>
            {/* Header with average rating */}
            {avgRating && (
                <div className={styles.reviewsHeader}>
                    <div className={styles.avgRatingSection}>
                        <div className={styles.avgRating}>
                            <div className={styles.avgNumberCircle}>{avgRating}</div>
                            <div className={styles.avgStars}>
                                {renderStars(Number(avgRating))}
                            </div>
                            <div className={styles.avgText}>trên 5 sao</div>
                        </div>
                        <div className={styles.totalReviews}>
                            {safeReviews.length} đánh giá
                        </div>
                    </div>

                    <div className={styles.ratingDistribution}>
                        {[5, 4, 3, 2, 1].map(rating =>
                            renderRatingBar(rating, ratingDistribution[rating as keyof typeof ratingDistribution])
                        )}
                    </div>
                </div>
            )}

            {/* Filters and sorting */}
            <div className={styles.controlsSection}>
                <button
                    className={styles.filterBtn}
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <FilterListIcon />
                    Bộ lọc
                </button>

                <div className={styles.sortSelect}>
                    <SortIcon />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className={styles.sortDropdown}
                    >
                        <option value="date">Mới nhất</option>
                        <option value="rating">Đánh giá cao</option>
                        <option value="helpful">Hữu ích nhất</option>
                    </select>
                </div>
            </div>

            {/* Filter options */}
            {showFilters && (
                <div className={styles.filterOptions}>
                    <div className={styles.ratingFilters}>
                        <span className={styles.filterLabel}>Lọc theo đánh giá:</span>
                        <div className={styles.ratingButtons}>
                            {[5, 4, 3, 2, 1].map(rating => (
                                <button
                                    key={rating}
                                    className={`${styles.ratingFilterBtn} ${filterRating === rating ? styles.active : ''}`}
                                    onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                                >
                                    {rating} sao
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Reviews list */}
            <div className={styles.reviewsList}>
                {filteredAndSortedReviews.map((review, idx) => (
                    <div key={review.id || idx} className={styles.reviewCard}>
                        <div className={styles.reviewHeader}>
                            <div className={styles.userInfo}>
                                <div className={styles.userAvatar}>
                                    <PersonIcon />
                                </div>
                                <div className={styles.userDetails}>
                                    <div className={styles.userName}>
                                        {review.user}
                                        {review.verified && (
                                            <span className={styles.verifiedBadge}>✓</span>
                                        )}
                                    </div>
                                    <div className={styles.reviewMeta}>
                                        <div className={styles.reviewStars}>
                                            {renderStars(review.rating)}
                                        </div>
                                        <span className={styles.reviewDate}>
                                            {review.date || 'Gần đây'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.reviewContent}>
                            <p className={styles.reviewComment}>{review.comment}</p>
                        </div>

                        {review.helpful && (
                            <div className={styles.reviewActions}>
                                <span className={styles.helpfulCount}>
                                    {review.helpful} người thấy hữu ích
                                </span>
                            </div>
                        )}
                    </div>
                ))}

                {filteredAndSortedReviews.length === 0 && (
                    <div className={styles.noReviews}>
                        <h3>Chưa có đánh giá nào</h3>
                        <p>Hãy là người đầu tiên đánh giá khóa học này!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseReviews; 