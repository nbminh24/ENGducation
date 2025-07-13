# ENGducation - Sàn thương mại khóa học tiếng Anh

![ENGducation](https://img.shields.io/badge/ENGducation-Education%20Marketplace-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![SCSS](https://img.shields.io/badge/SCSS-Styling-orange)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green)

## 📋 Tổng quan

ENGducation là một sàn thương mại khóa học tiếng Anh hiện đại, được xây dựng với React và TypeScript. Nền tảng kết nối người học với các khóa học chất lượng cao, cung cấp trải nghiệm mua sắm và học tập tương tác với chatbot AI thông minh và giao diện responsive trên mọi thiết bị.

## 🚀 Tính năng chính

### 🛒 **Sàn thương mại khóa học**
- ✅ **Catalog đa dạng** với hàng trăm khóa học từ các giảng viên uy tín
- ✅ **Hệ thống đánh giá** và reviews từ học viên thực tế
- ✅ **Tìm kiếm và lọc** thông minh theo level, giá, rating
- ✅ **Giỏ hàng và thanh toán** tích hợp
- ✅ **Khuyến mãi và voucher** hệ thống

### 🎓 **Quản lý khóa học**
- ✅ **Chi tiết khóa học** với curriculum, preview, instructor info
- ✅ **Video preview** và sample lessons
- ✅ **Progress tracking** và completion certificates
- ✅ **Discussion forums** và Q&A
- ✅ **Download materials** và resources

### 🤖 **Chatbot AI thông minh**
- ✅ **AI đọc và phân tích** dữ liệu mock courses
- ✅ **Xử lý ngôn ngữ tự nhiên** để hiểu câu hỏi người dùng
- ✅ **Tư vấn khóa học** phù hợp với nhu cầu và budget
- ✅ **So sánh khóa học** và đưa ra gợi ý tối ưu
- ✅ **Hỗ trợ mua hàng** và giải đáp thắc mắc

### 📱 **Responsive Design**
- ✅ **Mobile-first approach** với breakpoints chuẩn
- ✅ **Hamburger menu** cho mobile với animation
- ✅ **Touch-friendly** interface cho mua sắm
- ✅ **Adaptive layouts** cho mọi kích thước màn hình

### 🎨 **UI/UX hiện đại**
- ✅ **Glassmorphism design** với backdrop blur
- ✅ **Smooth animations** và transitions
- ✅ **Material-UI components** tích hợp
- ✅ **Shopping cart** và checkout flow
- ✅ **Loading states** và error handling

### 🔍 **Tính năng tương tác**
- ✅ **Wishlist** và favorite courses
- ✅ **Purchased courses**
- ✅ **Reviews và ratings** system

## 🛠 Công nghệ sử dụng

### Frontend
- **React 18.2.0** - UI Framework
- **TypeScript 5.0+** - Type safety
- **SCSS/Sass** - Advanced styling
- **Material-UI** - Component library
- **React Router** - Navigation

### E-commerce & AI
- **Mock API** - Simulated backend
- **AI Processing** - Course data analysis
- **Natural Language Processing** - Chatbot intelligence
- **Shopping Cart** - E-commerce functionality

### Development
- **Create React App** - Build tool
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Cài đặt từ GitHub

### Yêu cầu hệ thống
- Node.js 16.0+ 
- npm 8.0+ hoặc yarn 1.22+

### Bước 1: Clone repository
```bash
git clone https://github.com/your-username/fe_engducation.git
cd fe_engducation
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy ứng dụng
```bash
npm start
```

## 🤖 Chatbot AI

### Cách hoạt động
Chatbot AI của ENGducation không chỉ xử lý logic đơn giản mà còn:

1. **Đọc và phân tích dữ liệu khóa học**
   - AI đọc toàn bộ nội dung mock courses
   - Phân tích cấu trúc, giá cả, rating
   - Hiểu context và mục tiêu học tập

2. **Xử lý ngôn ngữ tự nhiên**
   - Hiểu câu hỏi của người dùng
   - Phân tích intent và entities
   - Tạo response phù hợp

3. **Tư vấn mua hàng thông minh**
   - Dựa trên level và budget
   - So sánh các khóa học tương tự
   - Đề xuất khóa học phù hợp nhất

### Ví dụ tương tác
```
User: "Tôi muốn học tiếng Anh giao tiếp với budget 500k"
AI: "Tôi thấy bạn quan tâm đến giao tiếp với budget 500k. Dựa trên dữ liệu, tôi đề xuất:
- Khóa 'English Conversation Basics' (450k, 4.5⭐)
- Khóa 'Business English Communication' (480k, 4.8⭐)
- Khóa 'Speaking Confidence Builder' (420k, 4.3⭐)

Khóa nào phù hợp với bạn nhất?"
```

## 📱 Responsive Design

### Breakpoints
- **XS**: ≤ 480px (Mobile phones)
- **SM**: ≤ 768px (Tablets) 
- **MD**: ≤ 900px (Small laptops)
- **LG**: ≤ 1200px (Desktop)
- **XL**: ≤ 1400px (Large screens)

### Tính năng responsive
- ✅ Hamburger menu cho mobile
- ✅ Mobile menu overlay với animation
- ✅ Responsive grid layouts
- ✅ Adaptive typography
- ✅ Touch-friendly shopping experience

## 🚀 Scripts có sẵn

### Development
```bash
npm start          # Chạy development server
npm test           # Chạy test suite
npm run build      # Build production
npm run eject      # Eject CRA (không khuyến khích)
```

### Build & Deploy
```bash
npm run build      # Tạo production build
npm run deploy     # Deploy lên Netlify (nếu có)
```

## 📁 Cấu trúc project

```
src/
├── components/          # React components
│   ├── Navbar/         # Navigation
│   ├── HeroSection/    # Landing section
│   ├── CourseList/     # Course catalog
│   ├── CourseDetail/   # Course pages
│   ├── ChatbotPopup/   # AI Chatbot
│   ├── ShoppingCart/   # E-commerce
│   └── ...
├── screens/            # Page components
├── services/           # API & AI services
├── hooks/              # Custom React hooks
├── styles/             # Global styles & variables
└── assets/             # Images & icons
```

## 🎯 Roadmap

### Phase 1 (Current) ✅
- [x] Responsive design
- [x] Chatbot AI basic
- [x] Course catalog
- [x] User interface

### Phase 2 (Planned)
- [ ] Real backend integration
- [ ] Payment gateway integration
- [ ] Advanced AI features
- [ ] User authentication
- [ ] Order management

### Phase 3 (Future)
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Social features
- [ ] Gamification
- [ ] Affiliate system

