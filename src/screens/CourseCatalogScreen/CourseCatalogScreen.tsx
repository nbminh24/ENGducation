import React, { useEffect, useState, useMemo } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Newsletter from '../../components/Newsletter/Newsletter';
import { fetchCoursesWithPagination } from '../../services/mockApi';
import CourseCatalogHeader from '../../components/CourseCatalog/CourseCatalogHeader';
import CourseCatalogSidebar from '../../components/CourseCatalog/CourseCatalogSidebar';
import CourseList from '../../components/CourseList/CourseList';

interface FilterState {
    price?: string;
    rating?: number[];
    topic?: string;
}

const PAGE_SIZE = 12; // 3 hàng × 4 cột

const CourseCatalogScreen: React.FC = () => {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('popular');
    const [filter, setFilter] = useState<Partial<FilterState>>({});
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalCourses: 0,
        hasNextPage: false,
        hasPrevPage: false
    });

    useEffect(() => {
        setLoading(true);
        fetchCoursesWithPagination(page, PAGE_SIZE).then(data => {
            setCourses(data.courses);
            setPagination(data.pagination);
            setLoading(false);
        });
    }, [page]);

    // Reset page khi search thay đổi
    useEffect(() => {
        setPage(1);
    }, [search]);

    const filteredCourses = useMemo(() => {
        let result = [...courses];

        // Tìm kiếm theo search term
        if (search.trim()) {
            const searchLower = search.toLowerCase().trim();
            result = result.filter(course =>
                course.title.toLowerCase().includes(searchLower) ||
                course.description?.toLowerCase().includes(searchLower) ||
                course.author.toLowerCase().includes(searchLower) ||
                course.badge?.toLowerCase().includes(searchLower)
            );
        }

        // Lọc theo giá
        if (filter.price) {
            if (filter.price === 'lt500') result = result.filter(c => c.price < 500000);
            else if (filter.price === '500to1m') result = result.filter(c => c.price >= 500000 && c.price <= 1000000);
            else if (filter.price === 'gt1m') result = result.filter(c => c.price > 1000000);
        }
        // Lọc theo rating (cho phép chọn nhiều rating)
        if (Array.isArray(filter.rating) && filter.rating.length > 0) {
            result = result.filter(c => filter.rating && filter.rating.includes(Math.round(c.rating)));
        }
        // Lọc theo topic nếu có
        if (filter.topic) result = result.filter(c => c.category === filter.topic);
        // Sắp xếp
        if (sort === 'popular') result = result.sort((a, b) => b.reviews - a.reviews);
        if (sort === 'newest') result = result.sort((a, b) => b.id - a.id);
        if (sort === 'rating') result = result.sort((a, b) => b.rating - a.rating);
        return result;
    }, [courses, filter, sort, search]);

    return (
        <>
            <Navbar />
            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '0 0 32px 0' }}>
                <div style={{ maxWidth: 1440, margin: '0 auto', padding: '32px 0' }}>
                    <CourseCatalogHeader />
                    <div style={{ display: 'flex', gap: 32 }}>
                        <CourseCatalogSidebar filter={filter} setFilter={setFilter} courses={courses} />
                        <div style={{ flex: 1.5, padding: '0 12px' }}>
                            <CourseList
                                search={search}
                                setSearch={setSearch}
                                courses={filteredCourses}
                                loading={loading}
                                sort={sort}
                                setSort={setSort}
                                page={pagination.currentPage}
                                setPage={setPage}
                                totalPages={pagination.totalPages}
                                totalCourses={filteredCourses.length}
                            />
                        </div>
                    </div>
                </div>
                <Newsletter />
            </main>
            <Footer />
        </>
    );
};

export default CourseCatalogScreen; 