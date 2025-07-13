// Mock data cho các section

// Courses
export const mockCourses = [
    {
        id: 1,
        title: 'Tiếng Anh Giao Tiếp Cơ Bản',
        description: 'Giao tiếp cơ bản hàng ngày cho người mới bắt đầu',
        author: 'Nguyễn Văn A',
        price: 299000,
        oldPrice: 599000,
        rating: 4.8,
        image: '/product/course2.jpg',
        lessons: 24,
        duration: '12 giờ',
        badge: 'Beginner',
        about: 'Khóa học giúp bạn tự tin giao tiếp tiếng Anh trong các tình huống hàng ngày, từ chào hỏi, mua sắm, hỏi đường đến giao tiếp công sở.',
        curriculum: [
            { week: 1, topic: 'Chào hỏi & Giới thiệu bản thân' },
            { week: 2, topic: 'Giao tiếp khi mua sắm' },
            { week: 3, topic: 'Hỏi đường & di chuyển' },
            { week: 4, topic: 'Giao tiếp công sở cơ bản' }
        ],
        faq: [
            { question: 'Khóa học này phù hợp với ai?', answer: 'Người mới bắt đầu học tiếng Anh hoặc muốn cải thiện giao tiếp cơ bản.' },
            { question: 'Có tài liệu kèm theo không?', answer: 'Có, bạn sẽ được cung cấp tài liệu PDF sau mỗi buổi học.' }
        ],
        reviews: [
            { user: 'Lê Minh', rating: 5, comment: 'Khóa học rất dễ hiểu, giáo viên nhiệt tình.' },
            { user: 'Trần Hoa', rating: 4, comment: 'Nội dung thực tế, áp dụng được ngay.' }
        ],
        resources: [
            { name: 'Tài liệu PDF bài học', url: '/resources/lesson1.pdf' },
            { name: 'Audio luyện nghe', url: '/resources/audio1.mp3' }
        ],
        discussions: [
            { user: 'Nguyễn Văn B', content: 'Có ai muốn học nhóm không?', time: '2 ngày trước' },
            { user: 'Phạm Thị C', content: 'Bài tập tuần 2 có khó không mọi người?', time: '1 ngày trước' }
        ]
    },
    {
        id: 2,
        title: 'IELTS Listening & Writing',
        description: 'Chiến lược làm bài Listening & Writing hiệu quả',
        author: 'Trần Thị B',
        price: 499000,
        oldPrice: 899000,
        rating: 4.9,
        image: '/product/course2.jpg',
        lessons: 30,
        duration: '20 giờ',
        badge: 'IELTS',
    },
    {
        id: 3,
        title: 'Tiếng Anh Cho Người Mới Bắt Đầu',
        description: 'Nền tảng vững chắc cho người mới học tiếng Anh',
        author: 'Lê Văn C',
        price: 199000,
        oldPrice: 499000,
        rating: 4.7,
        image: '/product/course2.jpg',
        lessons: 18,
        duration: '10 giờ',
        badge: 'Beginner',
    },
    {
        id: 4,
        title: 'Business English',
        description: 'Tiếng Anh cho doanh nghiệp, giao tiếp chuyên nghiệp',
        author: 'Phạm Thị D',
        price: 399000,
        oldPrice: 799000,
        rating: 4.8,
        image: '/product/course2.jpg',
        lessons: 22,
        duration: '14 giờ',
        badge: 'Business',
    },
    {
        id: 5,
        title: 'Phát Âm Chuẩn',
        description: 'Luyện phát âm chuẩn giọng bản xứ',
        author: 'Ngô Văn E',
        price: 249000,
        oldPrice: 399000,
        rating: 4.6,
        image: '/product/course2.jpg',
        lessons: 16,
        duration: '8 giờ',
        badge: 'Pronunciation',
    },
    {
        id: 6,
        title: 'English for Office',
        description: 'Tiếng Anh văn phòng thực chiến',
        author: 'Đặng Thị F',
        price: 299000,
        oldPrice: 699000,
        rating: 4.7,
        image: '/product/course2.jpg',
        lessons: 20,
        duration: '11 giờ',
        badge: 'Office',
    },
    {
        id: 7,
        title: 'English for Travel',
        description: 'Tự tin giao tiếp khi đi du lịch nước ngoài',
        author: 'Bùi Văn G',
        price: 199000,
        oldPrice: 399000,
        rating: 4.8,
        image: '/product/course2.jpg',
        lessons: 14,
        duration: '7 giờ',
        badge: 'Travel',
    },
    {
        id: 8,
        title: 'Luyện Nghe Hiệu Quả',
        description: 'Nâng cao kỹ năng nghe hiểu qua các chủ đề thực tế',
        author: 'Vũ Thị H',
        price: 249000,
        oldPrice: 499000,
        rating: 4.7,
        image: '/product/course2.jpg',
        lessons: 18,
        duration: '9 giờ',
        badge: 'Listening',
    },
    {
        id: 9,
        title: 'IELTS Speaking Masterclass',
        description: 'Luyện nói IELTS với giám khảo thực tế',
        author: 'Sarah Johnson',
        price: 599000,
        oldPrice: 999000,
        rating: 4.9,
        image: '/product/course2.jpg',
        lessons: 28,
        duration: '16 giờ',
        badge: 'IELTS',
    },
    {
        id: 10,
        title: 'Tiếng Anh Cho Trẻ Em',
        description: 'Phương pháp học tiếng Anh vui nhộn cho trẻ 6-12 tuổi',
        author: 'Emma Wilson',
        price: 199000,
        oldPrice: 399000,
        rating: 4.8,
        image: '/product/course2.jpg',
        lessons: 20,
        duration: '12 giờ',
        badge: 'Kids',
    },
    {
        id: 11,
        title: 'Medical English',
        description: 'Tiếng Anh chuyên ngành y tế cho bác sĩ, y tá',
        author: 'Dr. Michael Chen',
        price: 449000,
        oldPrice: 799000,
        rating: 4.7,
        image: '/product/course2.jpg',
        lessons: 24,
        duration: '15 giờ',
        badge: 'Medical',
    },
    {
        id: 12,
        title: 'TOEIC Speaking & Writing',
        description: 'Luyện thi TOEIC SW với chiến lược hiệu quả',
        author: 'David Kim',
        price: 399000,
        oldPrice: 699000,
        rating: 4.6,
        image: '/product/course2.jpg',
        lessons: 22,
        duration: '13 giờ',
        badge: 'TOEIC',
    },
    {
        id: 13,
        title: 'English for IT Professionals',
        description: 'Tiếng Anh cho dân IT, phỏng vấn công ty nước ngoài',
        author: 'Alex Thompson',
        price: 349000,
        oldPrice: 649000,
        rating: 4.8,
        image: '/product/course2.jpg',
        lessons: 18,
        duration: '10 giờ',
        badge: 'IT',
    },
    {
        id: 14,
        title: 'Academic Writing',
        description: 'Viết học thuật cho sinh viên đại học, nghiên cứu sinh',
        author: 'Prof. Lisa Anderson',
        price: 299000,
        oldPrice: 549000,
        rating: 4.5,
        image: '/product/course2.jpg',
        lessons: 16,
        duration: '8 giờ',
        badge: 'Academic',
    },
    {
        id: 15,
        title: 'English for Sales & Marketing',
        description: 'Tiếng Anh chuyên ngành bán hàng và marketing',
        author: 'Jennifer Lee',
        price: 379000,
        oldPrice: 679000,
        rating: 4.7,
        image: '/product/course2.jpg',
        lessons: 20,
        duration: '12 giờ',
        badge: 'Sales',
    },
    {
        id: 16,
        title: 'Conversational English Advanced',
        description: 'Giao tiếp nâng cao với người bản xứ',
        author: 'James Wilson',
        price: 279000,
        oldPrice: 479000,
        rating: 4.8,
        image: '/product/course2.jpg',
        lessons: 14,
        duration: '9 giờ',
        badge: 'Advanced',
    },
    {
        id: 17,
        title: 'English Grammar Mastery',
        description: 'Nắm vững ngữ pháp tiếng Anh từ cơ bản đến nâng cao',
        author: 'Maria Garcia',
        price: 229000,
        oldPrice: 429000,
        rating: 4.6,
        image: '/product/course2.jpg',
        lessons: 26,
        duration: '14 giờ',
        badge: 'Grammar',
    },
    {
        id: 18,
        title: 'English for Customer Service',
        description: 'Tiếng Anh dịch vụ khách hàng chuyên nghiệp',
        author: 'Robert Taylor',
        price: 259000,
        oldPrice: 459000,
        rating: 4.7,
        image: '/product/course2.jpg',
        lessons: 16,
        duration: '8 giờ',
        badge: 'Service',
    },
];

// Testimonials
export const mockTestimonials = [
    {
        id: 1,
        name: 'Nguyễn Thị Mai',
        avatar: '',
        content: 'Khóa học rất dễ hiểu, giáo viên nhiệt tình!',
        courseName: 'Tiếng Anh Giao Tiếp Cơ Bản',
        completionDate: '2 tuần trước',
    },
    {
        id: 2,
        name: 'Trần Văn Nam',
        avatar: '',
        content: 'Sau khóa IELTS mình đã đạt 7.0, cảm ơn ENGducation!',
        courseName: 'Luyện Thi IELTS 6.5+',
        completionDate: '1 tháng trước',
    },
    {
        id: 3,
        name: 'Lê Thị Hồng',
        avatar: '',
        content: 'Mình mất gốc mà học xong tự tin giao tiếp luôn.',
        courseName: 'Tiếng Anh Cho Người Mất Gốc',
        completionDate: '3 tuần trước',
    },
    {
        id: 4,
        name: 'Phạm Minh Quân',
        avatar: '',
        content: 'Bài giảng thực tế, ứng dụng được ngay vào công việc.',
        courseName: 'Tiếng Anh Thương Mại',
        completionDate: '1 tuần trước',
    },
    {
        id: 5,
        name: 'Ngô Thị Lan',
        avatar: '',
        content: 'Phát âm chuẩn hơn rất nhiều, cảm ơn thầy cô!',
        courseName: 'Phát Âm Chuẩn Mỹ',
        completionDate: '2 tháng trước',
    },
    {
        id: 6,
        name: 'Vũ Minh Tuấn',
        avatar: '',
        content: 'Khóa học phù hợp cho người đi làm, rất thực tế.',
        courseName: 'Tiếng Anh Cho Người Đi Làm',
        completionDate: '1 tháng trước',
    },
    {
        id: 7,
        name: 'Đặng Thị Hạnh',
        avatar: '',
        content: 'Học xong tự tin đi du lịch nước ngoài!',
        courseName: 'Tiếng Anh Du Lịch',
        completionDate: '3 tuần trước',
    },
    {
        id: 8,
        name: 'Nguyễn Văn Hùng',
        avatar: '',
        content: 'Kỹ năng nghe cải thiện rõ rệt sau khóa học.',
        courseName: 'Luyện Nghe Tiếng Anh Hiệu Quả',
        completionDate: '2 tuần trước',
    },
    {
        id: 9,
        name: 'Lê Thị Thu',
        avatar: '',
        content: 'Giá cả hợp lý, chất lượng vượt mong đợi.',
        courseName: 'Tiếng Anh Giao Tiếp Cơ Bản',
        completionDate: '1 tháng trước',
    },
    {
        id: 10,
        name: 'Phan Văn Bình',
        avatar: '',
        content: 'Cảm ơn ENGducation đã giúp mình tiến bộ!',
        courseName: 'Luyện Thi IELTS 6.5+',
        completionDate: '2 tuần trước',
    },
];

// Achievements
export const mockAchievements = {
    teachers: 120,
    students: 25000,
    classes: 1800,
    courses: 45,
};

// API giả lập
export const fetchCourses = () => Promise.resolve(mockCourses);
export const fetchTestimonials = () => Promise.resolve(mockTestimonials);
export const fetchAchievements = () => Promise.resolve(mockAchievements);

// API cho Home Screen - chỉ lấy 8 khóa học cố định (quảng cáo)
export const fetchFeaturedCourses = () => {
    // Lấy 8 khóa học có rating cao nhất để quảng cáo
    const featuredCourses = mockCourses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);
    return Promise.resolve(featuredCourses);
};

// API cho Course List với phân trang
export const fetchCoursesWithPagination = (page: number = 1, limit: number = 12) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedCourses = mockCourses.slice(startIndex, endIndex);
    const totalPages = Math.ceil(mockCourses.length / limit);

    return Promise.resolve({
        courses: paginatedCourses,
        pagination: {
            currentPage: page,
            totalPages,
            totalCourses: mockCourses.length,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1
        }
    });
};

export const fetchSuggestions = (userId: string, viewedIds: number[], favoriteIds: number[]) => {
    const allIds = Array.from(new Set([...viewedIds, ...favoriteIds]));
    const userCourses = mockCourses.filter(c => allIds.includes(c.id));
    const keywords = Array.from(new Set(
        userCourses.flatMap(c => [
            ...(c.badge ? [c.badge.toLowerCase()] : []),
            ...(c.title ? c.title.toLowerCase().split(' ') : []),
            ...(c.author ? c.author.toLowerCase().split(' ') : []),
        ])
    ));
    const suggestions = mockCourses
        .filter(c => !allIds.includes(c.id))
        .map(c => {
            const courseKeywords = [
                ...(c.badge ? [c.badge.toLowerCase()] : []),
                ...(c.title ? c.title.toLowerCase().split(' ') : []),
                ...(c.author ? c.author.toLowerCase().split(' ') : []),
            ];
            const matchCount = courseKeywords.filter(kw => keywords.includes(kw)).length;
            return { ...c, matchCount };
        })
        .filter(c => c.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount || b.rating - a.rating)
        .slice(0, 4);
    const fallback = mockCourses
        .filter(c => !allIds.includes(c.id))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
    return new Promise(resolve =>
        setTimeout(() => resolve(suggestions.length > 0 ? suggestions : fallback), 1200)
    );
}; 