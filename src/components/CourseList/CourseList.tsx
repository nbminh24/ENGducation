import React from 'react';
import styles from './CourseList.module.scss';
import CourseCard from './CourseCard/CourseCard';
import { mockCourses } from '../../services/mockApi';
import SearchIcon from '@mui/icons-material/Search';

interface CourseListProps {
    search: string;
    setSearch: (s: string) => void;
    courses?: any[];
    loading?: boolean;
    sort?: string;
    setSort?: (s: string) => void;
    page?: number;
    setPage?: (p: number) => void;
    totalPages?: number;
    totalCourses?: number;
    showSearch?: boolean;
    hideHeaderTabs?: boolean;
}

const CourseList: React.FC<CourseListProps> = ({
    search,
    setSearch,
    courses,
    loading = false,
    sort,
    setSort,
    page,
    setPage,
    totalPages,
    totalCourses,
    showSearch = true,
    hideHeaderTabs = false
}) => {
    // Nếu không truyền prop courses thì dùng mockCourses (HomeScreen)
    const displayCourses = courses || mockCourses;

    return (
        <section className={styles.courseList}>
            {!hideHeaderTabs && (
                <div className={styles.header}>
                    <h2>Khóa học nổi bật cho bạn</h2>
                    <div className={styles.subtitle}>Khám phá lộ trình học tập phù hợp với bạn</div>
                    {/* Thanh tìm kiếm */}
                    {showSearch && (
                        <div className={styles.searchWrapper}>
                            <SearchIcon className={styles.searchIcon} />
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Tìm kiếm khóa học..."
                                className={styles.searchInput}
                            />
                        </div>
                    )}
                </div>
            )}
            {/* Số lượng khóa học và sort (nếu có) */}
            {(typeof totalCourses === 'number' || sort) && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <div style={{ color: '#7a7e9a', fontWeight: 500 }}>{totalCourses ?? displayCourses.length} khóa học</div>
                    {sort && setSort && (
                        <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '8px 18px', borderRadius: 8, border: '1.5px solid #e0e3eb', fontSize: '1.02rem' }}>
                            <option value="asc">Tăng dần</option>
                            <option value="desc">Giảm dần</option>
                        </select>
                    )}
                </div>
            )}
            {/* Grid CourseCard */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: 48 }}>Đang tải...</div>
            ) : (
                <div className={styles.grid}>
                    {displayCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                    {displayCourses.length === 0 && <div style={{ gridColumn: '1/4', textAlign: 'center', color: '#b0b3c6' }}>Không có khóa học phù hợp.</div>}
                </div>
            )}
            {/* Pagination nếu có */}
            {totalPages && setPage && page && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            style={{
                                padding: '8px 16px',
                                borderRadius: 8,
                                border: '1.5px solid #e0e3eb',
                                background: page === i + 1 ? '#304ffe' : '#fff',
                                color: page === i + 1 ? '#fff' : '#304ffe',
                                fontWeight: 700,
                                cursor: 'pointer',
                                minWidth: 40
                            }}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CourseList; 