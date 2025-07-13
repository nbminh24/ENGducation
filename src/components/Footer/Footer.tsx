import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.columns}>
                    {/* Cột 1: Logo + mô tả + social */}
                    <div className={styles.col}>
                        <div className={styles.logo}>ENGducation</div>
                        <div className={styles.desc}>
                            Nền tảng khóa học tiếng Anh hiện đại, chất lượng, dễ tiếp cận cho mọi đối tượng.
                        </div>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 2.05C16.11 2 15.22 2 14.33 2C9.61 2 6 5.61 6 10.33V12H2v4h4v8h4v-8h3l1-4h-4v-1.67C10 7.61 11.61 6 14.33 6c.89 0 1.78 0 2.67.05V2.05z" fill="#3540e8" /></svg></a>
                            <a href="#" aria-label="Instagram"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#3540e8" strokeWidth="2" /><circle cx="12" cy="12" r="5" stroke="#3540e8" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.5" fill="#3540e8" /></svg></a>
                            <a href="#" aria-label="Twitter"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 5.92a8.38 8.38 0 01-2.36.65A4.13 4.13 0 0021.4 4.1a8.19 8.19 0 01-2.6.99A4.11 4.11 0 0012 8.09c0 .32.04.64.1.94A11.65 11.65 0 013 4.89a4.11 4.11 0 001.27 5.48A4.07 4.07 0 012.8 9.1v.05a4.11 4.11 0 003.3 4.03c-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08a4.13 4.13 0 003.84 2.85A8.24 8.24 0 012 19.54a11.62 11.62 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022 5.92z" fill="#3540e8" /></svg></a>
                        </div>
                    </div>
                    {/* Cột 2: Danh mục */}
                    <div className={styles.col}>
                        <div className={styles.heading}>Danh mục</div>
                        <ul className={styles.links}>
                            <li>Khóa học tiếng Anh</li>
                            <li>Giao tiếp</li>
                            <li>Luyện thi</li>
                        </ul>
                    </div>
                    {/* Cột 3: Hỗ trợ */}
                    <div className={styles.col}>
                        <div className={styles.heading}>Hỗ trợ</div>
                        <ul className={styles.links}>
                            <li>Hướng dẫn đăng ký</li>
                            <li>Chính sách đổi trả</li>
                            <li>Thanh toán & Học phí</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>
                    {/* Cột 4: Thông tin */}
                    <div className={styles.col}>
                        <div className={styles.heading}>Thông tin</div>
                        <ul className={styles.links}>
                            <li>Về ENGducation</li>
                            <li>Tin tức</li>
                            <li>Tuyển dụng</li>
                            <li>Điều khoản sử dụng</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyright}>
                    © 2025 ENGducation. Tất cả quyền được bảo lưu.
                </div>
            </div>
        </footer>
    );
};

export default Footer; 