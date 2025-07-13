import React from 'react';
import styles from './Newsletter.module.scss';
import { Button, TextField } from '@mui/material';

const Newsletter: React.FC = () => {
    return (
        <section className={styles.newsletter}>
            <h2 className={styles.title}>Đăng ký nhận tin mới từ ENGducation</h2>
            <p className={styles.desc}>Nhận thông tin về khóa học, ưu đãi và bí quyết học tiếng Anh hiệu quả mỗi tuần.</p>
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
                <TextField
                    type="email"
                    placeholder="Nhập email của bạn"
                    variant="outlined"
                    size="small"
                    required
                    sx={{
                        flex: 1,
                        minWidth: 180,
                        background: '#fff',
                        borderRadius: '12px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            fontSize: '1.08rem',
                            color: '#222',
                            background: '#fff',
                            '& fieldset': {
                                borderColor: '#e0e3eb',
                                borderWidth: '1.5px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#e0e3eb',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#e0e3eb',
                            },
                        },
                        '& input::placeholder': {
                            color: '#c2c3d1',
                            opacity: 1,
                            fontSize: '0.97rem',
                            fontWeight: 400,
                        },
                        fontWeight: 400,
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                        fontWeight: 700,
                        borderRadius: '12px',
                        padding: '12px 38px',
                        background: '#304ffe',
                        color: '#fff',
                        boxShadow: 'none',
                        textTransform: 'none',
                        fontSize: '1.13rem',
                        transition: 'none',
                        '&:hover': {
                            background: '#304ffe',
                            color: '#fff',
                            boxShadow: 'none',
                        },
                    }}
                >
                    Đăng ký
                </Button>
            </form>
        </section>
    );
};

export default Newsletter; 