import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedCourseList from '../../components/CourseList/FeaturedCourseList';
import Achievements from '../../components/Achievements/Achievements';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const HomeScreen: React.FC = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeaturedCourseList search={search} setSearch={setSearch} />
            <Achievements />
            <Testimonials />
            <Newsletter />
            <Footer />
        </>
    );
};

export default HomeScreen; 