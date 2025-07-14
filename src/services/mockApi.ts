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
        about: 'Khóa học giúp bạn nâng cao kỹ năng Listening & Writing cho kỳ thi IELTS.',
        curriculum: [
            { week: 1, topic: 'Giới thiệu về IELTS Listening' },
            { week: 2, topic: 'Chiến lược làm bài Listening' },
            { week: 3, topic: 'Writing Task 1' },
            { week: 4, topic: 'Writing Task 2' }
        ],
        faq: [
            { question: 'Khóa học này có phù hợp cho người mới bắt đầu không?', answer: 'Khóa học phù hợp cho mọi trình độ.' },
            { question: 'Có bài tập thực hành không?', answer: 'Có, mỗi buổi đều có bài tập thực hành.' }
        ],
        reviews: [
            { user: 'Nguyễn Văn D', rating: 5, comment: 'Nội dung rất sát đề thi.' },
            { user: 'Lê Thị E', rating: 4, comment: 'Giáo viên hỗ trợ tốt.' }
        ],
        resources: [
            { name: 'Tài liệu PDF Listening', url: '/resources/ielts_listening.pdf' },
            { name: 'Audio luyện nghe IELTS', url: '/resources/ielts_audio.mp3' }
        ],
        discussions: [
            { user: 'Trần Văn F', content: 'Có ai luyện đề cùng không?', time: '3 ngày trước' },
            { user: 'Phạm Thị G', content: 'Task 2 nên viết bao nhiêu từ?', time: '2 ngày trước' }
        ]
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
        about: 'Khóa học xây dựng nền tảng tiếng Anh vững chắc cho người mới.',
        curriculum: [
            { week: 1, topic: 'Bảng chữ cái & phát âm' },
            { week: 2, topic: 'Từ vựng cơ bản' },
            { week: 3, topic: 'Cấu trúc câu đơn giản' },
            { week: 4, topic: 'Giao tiếp cơ bản' }
        ],
        faq: [
            { question: 'Có cần biết tiếng Anh trước không?', answer: 'Không, khóa này dành cho người mới hoàn toàn.' },
            { question: 'Có bài kiểm tra không?', answer: 'Có, cuối mỗi tuần đều có bài kiểm tra.' }
        ],
        reviews: [
            { user: 'Nguyễn Thị H', rating: 5, comment: 'Dễ hiểu, phù hợp cho người mất gốc.' },
            { user: 'Lê Văn I', rating: 4, comment: 'Bài giảng sinh động.' }
        ],
        resources: [
            { name: 'Tài liệu PDF cơ bản', url: '/resources/basic_english.pdf' }
        ],
        discussions: [
            { user: 'Nguyễn Văn J', content: 'Có nhóm học chung không?', time: '1 ngày trước' }
        ]
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
        about: 'Khóa học giúp bạn tự tin giao tiếp trong môi trường doanh nghiệp.',
        curriculum: [
            { week: 1, topic: 'Giao tiếp trong công sở' },
            { week: 2, topic: 'Email & hội họp' },
            { week: 3, topic: 'Thuyết trình & đàm phán' }
        ],
        faq: [
            { question: 'Khóa này có phù hợp cho người đi làm không?', answer: 'Rất phù hợp cho người đi làm.' }
        ],
        reviews: [
            { user: 'Lê Thị K', rating: 5, comment: 'Áp dụng được ngay vào công việc.' }
        ],
        resources: [
            { name: 'Tài liệu PDF Business', url: '/resources/business.pdf' }
        ],
        discussions: [
            { user: 'Phạm Văn L', content: 'Có case study thực tế không?', time: '5 ngày trước' }
        ]
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
        about: 'Khóa học luyện phát âm chuẩn, cải thiện kỹ năng nghe nói.',
        curriculum: [
            { week: 1, topic: 'Nguyên âm & phụ âm' },
            { week: 2, topic: 'Trọng âm & ngữ điệu' }
        ],
        faq: [
            { question: 'Có giáo viên bản xứ không?', answer: 'Có buổi giao lưu với giáo viên bản xứ.' }
        ],
        reviews: [
            { user: 'Nguyễn Thị M', rating: 5, comment: 'Phát âm tiến bộ rõ rệt.' }
        ],
        resources: [
            { name: 'Audio luyện phát âm', url: '/resources/pronunciation.mp3' }
        ],
        discussions: [
            { user: 'Lê Văn N', content: 'Có bài tập về nhà không?', time: '2 ngày trước' }
        ]
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
        about: 'Khóa học tiếng Anh dành cho môi trường văn phòng.',
        curriculum: [
            { week: 1, topic: 'Giao tiếp với đồng nghiệp' },
            { week: 2, topic: 'Viết email chuyên nghiệp' }
        ],
        faq: [
            { question: 'Có thực hành tình huống không?', answer: 'Có nhiều tình huống thực tế.' }
        ],
        reviews: [
            { user: 'Phạm Thị O', rating: 4, comment: 'Nội dung sát thực tế.' }
        ],
        resources: [
            { name: 'Tài liệu Office', url: '/resources/office.pdf' }
        ],
        discussions: [
            { user: 'Nguyễn Văn P', content: 'Có lớp học tối không?', time: '3 ngày trước' }
        ]
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
        about: 'Khóa học giúp bạn giao tiếp tự tin khi đi du lịch.',
        curriculum: [
            { week: 1, topic: 'Từ vựng du lịch' },
            { week: 2, topic: 'Tình huống ở sân bay, khách sạn' }
        ],
        faq: [
            { question: 'Có học về giao tiếp khẩn cấp không?', answer: 'Có, có phần giao tiếp khẩn cấp.' }
        ],
        reviews: [
            { user: 'Lê Thị Q', rating: 5, comment: 'Đi du lịch tự tin hơn nhiều.' }
        ],
        resources: [
            { name: 'Tài liệu Travel', url: '/resources/travel.pdf' }
        ],
        discussions: [
            { user: 'Bùi Văn R', content: 'Có chia sẻ kinh nghiệm du lịch không?', time: '1 ngày trước' }
        ]
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
        about: 'Khóa học luyện nghe hiệu quả qua các chủ đề thực tế.',
        curriculum: [
            { week: 1, topic: 'Nghe chủ đề đời sống' },
            { week: 2, topic: 'Nghe chủ đề công việc' }
        ],
        faq: [
            { question: 'Có file audio không?', answer: 'Có nhiều file audio thực hành.' }
        ],
        reviews: [
            { user: 'Nguyễn Văn S', rating: 4, comment: 'Nghe tốt hơn sau khoá này.' }
        ],
        resources: [
            { name: 'Audio Listening', url: '/resources/listening.mp3' }
        ],
        discussions: [
            { user: 'Vũ Thị T', content: 'Có bài tập nhóm không?', time: '2 ngày trước' }
        ]
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
        about: 'Khóa học luyện nói IELTS với giám khảo thực tế.',
        curriculum: [
            { week: 1, topic: 'Speaking Part 1' },
            { week: 2, topic: 'Speaking Part 2 & 3' }
        ],
        faq: [
            { question: 'Có luyện thi thử không?', answer: 'Có nhiều đề thi thử.' }
        ],
        reviews: [
            { user: 'Sarah Lee', rating: 5, comment: 'Cải thiện kỹ năng nói rõ rệt.' }
        ],
        resources: [
            { name: 'Tài liệu Speaking', url: '/resources/speaking.pdf' }
        ],
        discussions: [
            { user: 'Nguyễn Văn U', content: 'Có feedback cá nhân không?', time: '1 ngày trước' }
        ]
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
        about: 'Khóa học tiếng Anh vui nhộn cho trẻ em.',
        curriculum: [
            { week: 1, topic: 'Từ vựng chủ đề gia đình' },
            { week: 2, topic: 'Bài hát tiếng Anh' }
        ],
        faq: [
            { question: 'Có hoạt động ngoại khoá không?', answer: 'Có nhiều hoạt động ngoại khoá.' }
        ],
        reviews: [
            { user: 'Emma Tran', rating: 5, comment: 'Bé nhà mình rất thích.' }
        ],
        resources: [
            { name: 'Tài liệu Kids', url: '/resources/kids.pdf' }
        ],
        discussions: [
            { user: 'Wilson Emma', content: 'Có lớp học thử không?', time: '3 ngày trước' }
        ]
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
        about: 'Khóa học tiếng Anh chuyên ngành y tế.',
        curriculum: [
            { week: 1, topic: 'Từ vựng y khoa' },
            { week: 2, topic: 'Giao tiếp với bệnh nhân' }
        ],
        faq: [
            { question: 'Có bài tập tình huống không?', answer: 'Có nhiều bài tập thực tế.' }
        ],
        reviews: [
            { user: 'Dr. Chen', rating: 5, comment: 'Rất hữu ích cho ngành y.' }
        ],
        resources: [
            { name: 'Tài liệu Medical', url: '/resources/medical.pdf' }
        ],
        discussions: [
            { user: 'Michael Chen', content: 'Có lớp chuyên sâu không?', time: '2 ngày trước' }
        ]
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
        about: 'Khóa học luyện thi TOEIC Speaking & Writing.',
        curriculum: [
            { week: 1, topic: 'Speaking Part 1' },
            { week: 2, topic: 'Writing Task 1' }
        ],
        faq: [
            { question: 'Có đề thi thử không?', answer: 'Có nhiều đề thi thử.' }
        ],
        reviews: [
            { user: 'David Kim', rating: 4, comment: 'Nội dung sát đề thi.' }
        ],
        resources: [
            { name: 'Tài liệu TOEIC', url: '/resources/toeic.pdf' }
        ],
        discussions: [
            { user: 'Kim David', content: 'Có lớp luyện phát âm không?', time: '1 ngày trước' }
        ]
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
        about: 'Khóa học tiếng Anh cho dân IT.',
        curriculum: [
            { week: 1, topic: 'Từ vựng IT' },
            { week: 2, topic: 'Phỏng vấn bằng tiếng Anh' }
        ],
        faq: [
            { question: 'Có luyện phỏng vấn không?', answer: 'Có buổi luyện phỏng vấn thực tế.' }
        ],
        reviews: [
            { user: 'Alex T.', rating: 5, comment: 'Phỏng vấn thành công nhờ khoá này.' }
        ],
        resources: [
            { name: 'Tài liệu IT', url: '/resources/it.pdf' }
        ],
        discussions: [
            { user: 'Thompson Alex', content: 'Có học về thuật ngữ chuyên ngành không?', time: '2 ngày trước' }
        ]
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
        about: 'Khóa học viết học thuật cho sinh viên.',
        curriculum: [
            { week: 1, topic: 'Cấu trúc bài luận' },
            { week: 2, topic: 'Trích dẫn & tham khảo' }
        ],
        faq: [
            { question: 'Có hướng dẫn viết luận không?', answer: 'Có hướng dẫn chi tiết.' }
        ],
        reviews: [
            { user: 'Lisa A.', rating: 4, comment: 'Viết luận dễ dàng hơn.' }
        ],
        resources: [
            { name: 'Tài liệu Writing', url: '/resources/writing.pdf' }
        ],
        discussions: [
            { user: 'Anderson Lisa', content: 'Có feedback bài viết không?', time: '1 ngày trước' }
        ]
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
        about: 'Khóa học tiếng Anh cho Sales & Marketing.',
        curriculum: [
            { week: 1, topic: 'Từ vựng marketing' },
            { week: 2, topic: 'Giao tiếp với khách hàng' }
        ],
        faq: [
            { question: 'Có học về email marketing không?', answer: 'Có phần email marketing.' }
        ],
        reviews: [
            { user: 'Jennifer L.', rating: 5, comment: 'Áp dụng được ngay.' }
        ],
        resources: [
            { name: 'Tài liệu Marketing', url: '/resources/marketing.pdf' }
        ],
        discussions: [
            { user: 'Lee Jennifer', content: 'Có học về quảng cáo không?', time: '2 ngày trước' }
        ]
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
        about: 'Khóa học giao tiếp nâng cao với người bản xứ.',
        curriculum: [
            { week: 1, topic: 'Giao tiếp nâng cao' },
            { week: 2, topic: 'Tình huống thực tế' }
        ],
        faq: [
            { question: 'Có thực hành với người bản xứ không?', answer: 'Có buổi thực hành trực tiếp.' }
        ],
        reviews: [
            { user: 'James W.', rating: 5, comment: 'Tự tin nói chuyện với người nước ngoài.' }
        ],
        resources: [
            { name: 'Tài liệu Advanced', url: '/resources/advanced.pdf' }
        ],
        discussions: [
            { user: 'Wilson James', content: 'Có lớp học thử không?', time: '1 ngày trước' }
        ]
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
        about: 'Khóa học ngữ pháp tiếng Anh từ cơ bản đến nâng cao.',
        curriculum: [
            { week: 1, topic: 'Thì cơ bản' },
            { week: 2, topic: 'Câu điều kiện' }
        ],
        faq: [
            { question: 'Có bài tập ngữ pháp không?', answer: 'Có nhiều bài tập thực hành.' }
        ],
        reviews: [
            { user: 'Maria G.', rating: 4, comment: 'Ngữ pháp dễ hiểu.' }
        ],
        resources: [
            { name: 'Tài liệu Grammar', url: '/resources/grammar.pdf' }
        ],
        discussions: [
            { user: 'Garcia Maria', content: 'Có kiểm tra cuối khoá không?', time: '2 ngày trước' }
        ]
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
        about: 'Khóa học tiếng Anh cho dịch vụ khách hàng.',
        curriculum: [
            { week: 1, topic: 'Giao tiếp với khách hàng' },
            { week: 2, topic: 'Xử lý tình huống khó' }
        ],
        faq: [
            { question: 'Có học về xử lý phàn nàn không?', answer: 'Có phần xử lý phàn nàn khách hàng.' }
        ],
        reviews: [
            { user: 'Robert T.', rating: 5, comment: 'Áp dụng tốt cho công việc.' }
        ],
        resources: [
            { name: 'Tài liệu Service', url: '/resources/service.pdf' }
        ],
        discussions: [
            { user: 'Taylor Robert', content: 'Có học thực hành không?', time: '1 ngày trước' }
        ]
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