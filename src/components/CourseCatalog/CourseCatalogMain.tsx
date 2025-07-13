import React from 'react';
import CourseCard from '../CourseList/CourseCard/CourseCard';

interface MainProps {
    loading: boolean;
    pagedCourses: any[];
    filteredCourses: any[];
    page: number;
    setPage: (p: number) => void;
    sort: string;
    setSort: (s: string) => void;
    totalPages: number;
}

const CourseCatalogMain: React.FC<MainProps> = ({ loading, pagedCourses, filteredCourses, page, setPage, sort, setSort, totalPages }) => (
    <section style={{ flex: 1 }}>
        {/* Sort + số lượng khóa học */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div style={{ color: '#7a7e9a', fontWeight: 500 }}>{filteredCourses.length} khóa học</div>
            <div>
                <select value={sort} onChange={e => { setSort(e.target.value); setPage(1); }} style={{ padding: '8px 18px', borderRadius: 8, border: '1.5px solid #e0e3eb', fontSize: '1.02rem' }}>
                    <option value="popular">Phổ biến nhất</option>
                    <option value="newest">Mới nhất</option>
                    <option value="rating">Đánh giá cao</option>
                </select>
            </div>
        </div>
        {/* Grid CourseCard */}
        {loading ? (
            <div style={{ textAlign: 'center', padding: 48 }}>Đang tải...</div>
        ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 32 }}>
                {pagedCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
                {pagedCourses.length === 0 && <div style={{ gridColumn: '1/4', textAlign: 'center', color: '#b0b3c6' }}>Không có khóa học phù hợp.</div>}
            </div>
        )}
        {/* Pagination thật */}
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
    </section>
);

export default CourseCatalogMain; 