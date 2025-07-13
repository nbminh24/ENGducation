import React, { useEffect, useState, useMemo } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Newsletter from '../../components/Newsletter/Newsletter';
import { fetchCourses } from '../../services/mockApi';
import CourseCatalogHeader from '../../components/CourseCatalog/CourseCatalogHeader';
import CourseCatalogSidebar from '../../components/CourseCatalog/CourseCatalogSidebar';
import CourseList from '../../components/CourseList/CourseList';

interface FilterState {
    price?: string;
    rating?: number[];
    topic?: string;
}

const PAGE_SIZE = 9;

const CourseCatalogScreen: React.FC = () => {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('popular');
    const [filter, setFilter] = useState<Partial<FilterState>>({});
    const [search, setSearch] = useState('');

    useEffect(() => {
        setLoading(true);
        fetchCourses().then(data => {
            setCourses(data);
            setLoading(false);
        });
    }, []);

    const filteredCourses = useMemo(() => {
        let result = [...courses];
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
    }, [courses, filter, sort]);

    const totalPages = Math.ceil(filteredCourses.length / PAGE_SIZE);
    const pagedCourses = filteredCourses.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
                                courses={pagedCourses}
                                loading={loading}
                                sort={sort}
                                setSort={setSort}
                                page={page}
                                setPage={setPage}
                                totalPages={totalPages}
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