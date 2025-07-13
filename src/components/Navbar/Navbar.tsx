import React from 'react';
import styles from './Navbar.module.scss';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>ENGducation</div>
            <ul className={styles.menu}>
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
                    <Link to="/suggestions" style={{ color: location.pathname.startsWith('/suggestions') ? '#304ffe' : undefined, fontWeight: location.pathname.startsWith('/suggestions') ? 700 : 600, textDecoration: 'none' }}>Gợi ý AI</Link>
                </li>
            </ul>
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