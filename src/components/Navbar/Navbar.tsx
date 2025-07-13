import React, { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    // Đóng menu khi click ra ngoài
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                isMobileMenuOpen &&
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={styles.navbar} ref={navRef}>
            <Link to="/" className={styles.logo} style={{ textDecoration: 'none', color: 'inherit' }}>
                ENGducation
            </Link>
            {/* Mobile menu button */}
            <button
                className={styles.mobileMenuButton}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}></span>
            </button>
            {/* Desktop menu */}
            <ul className={`${styles.menu} ${styles.desktopMenu}`}>
                <li>
                    <Link to="/" style={{ color: location.pathname === '/' ? '#304ffe' : undefined, fontWeight: location.pathname === '/' ? 700 : 600, textDecoration: 'none' }}>Trang chủ</Link>
                </li>
                <li>
                    <Link to="/courses" style={{ color: location.pathname.startsWith('/courses') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/courses') ? 700 : 600, textDecoration: 'none' }}>Khóa học</Link>
                </li>
                <li>
                    <Link to="/favorites" style={{ color: location.pathname.startsWith('/favorites') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/favorites') ? 700 : 600, textDecoration: 'none' }}>Yêu thích</Link>
                </li>
                <li>
                    <Link to="/history" style={{ color: location.pathname.startsWith('/history') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/history') ? 700 : 600, textDecoration: 'none' }}>Lịch sử xem</Link>
                </li>
                <li>
                    <Link to="/suggestions" style={{ color: location.pathname.startsWith('/suggestions') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/suggestions') ? 700 : 600, textDecoration: 'none' }}>Đề xuất</Link>
                </li>
                <li>
                    <Link to="/my-courses" style={{ color: location.pathname.startsWith('/my-courses') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/my-courses') ? 700 : 600, textDecoration: 'none' }}>Của tôi</Link>
                </li>
            </ul>
            {/* Mobile menu dropdown (subtab) */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
                <ul className={styles.mobileMenuList}>
                    <li>
                        <Link to="/" onClick={closeMobileMenu} style={{ color: location.pathname === '/' ? '#304ffe' : undefined, fontWeight: location.pathname === '/' ? 700 : 600, textDecoration: 'none' }}>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/courses" onClick={closeMobileMenu} style={{ color: location.pathname.startsWith('/courses') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/courses') ? 700 : 600, textDecoration: 'none' }}>Khóa học</Link>
                    </li>
                    <li>
                        <Link to="/favorites" onClick={closeMobileMenu} style={{ color: location.pathname.startsWith('/favorites') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/favorites') ? 700 : 600, textDecoration: 'none' }}>Yêu thích</Link>
                    </li>
                    <li>
                        <Link to="/history" onClick={closeMobileMenu} style={{ color: location.pathname.startsWith('/history') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/history') ? 700 : 600, textDecoration: 'none' }}>Lịch sử xem</Link>
                    </li>
                    <li>
                        <Link to="/suggestions" onClick={closeMobileMenu} style={{ color: location.pathname.startsWith('/suggestions') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/suggestions') ? 700 : 600, textDecoration: 'none' }}>Đề xuất</Link>
                    </li>
                    <li>
                        <Link to="/my-courses" onClick={closeMobileMenu} style={{ color: location.pathname.startsWith('/my-courses') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/my-courses') ? 700 : 600, textDecoration: 'none' }}>Của tôi</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.actions}>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '1.02rem',
                        padding: '7px 22px',
                        color: '#304ffe',
                        borderColor: '#304ffe',
                        boxShadow: 'none',
                        textTransform: 'none',
                        background: '#fff',
                        '&:hover': {
                            background: '#f5f6fd',
                            color: '#304ffe',
                            borderColor: '#304ffe',
                            boxShadow: 'none',
                        },
                    }}
                >
                    Đăng nhập
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '1.02rem',
                        padding: '7px 22px',
                        background: '#304ffe',
                        color: '#fff',
                        boxShadow: 'none',
                        textTransform: 'none',
                        '&:hover': {
                            background: '#304ffe',
                            color: '#fff',
                            boxShadow: 'none',
                        },
                    }}
                >
                    Đăng ký
                </Button>
            </div>
        </nav>
    );
};

export default Navbar; 