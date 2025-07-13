import React, { useState, useRef } from 'react';
import styles from './ChatbotPopup.module.scss';
import { mockCourses } from '../services/mockApi';
import CourseCard from './CourseList/CourseCard/CourseCard';

const GEMINI_API = process.env.REACT_APP_GEMINI_API || '';

const getPrompt = (question: string) => {
    const courseList = mockCourses.map(c =>
        `Tên: ${c.title}, Lĩnh vực: ${c.badge || ''}, Giảng viên: ${c.author}, Mô tả: ${c.description}`
    ).join('\n');
    return `
Bạn là trợ lý tư vấn khoá học thân thiện. 
- Nếu người dùng chỉ chào hỏi, hãy trả lời thân thiện, ngắn gọn, KHÔNG gợi ý khoá học, KHÔNG trả về id.
- Chỉ khi người dùng hỏi về khoá học, muốn tìm, muốn gợi ý, hoặc có nhu cầu học cụ thể, hãy gợi ý 1-2 khoá học phù hợp nhất (dựa trên thông tin sau):
${courseList}
- Khi gợi ý, trả lời tự nhiên, thân thiện, không nhắc đến id, không cần quá chi tiết. Sau phần trả lời, trả về JSON array id: [id1, id2] ở cuối câu trả lời (để FE hiển thị card).
- Nếu không có khoá học phù hợp, hãy trả lời thân thiện, động viên, không trả về id.

Người dùng hỏi: "${question}"
`.trim();
};

const ChatbotPopup: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string, ids?: number[] }[]>([]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = { role: 'user' as const, text: input };
        setMessages(msgs => [...msgs, userMsg]);
        setInput('');
        setLoading(true);
        try {
            const prompt = getPrompt(input);
            const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + GEMINI_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            const data = await res.json();
            console.log('Gemini API response:', data);
            let text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Xin lỗi, tôi chưa có câu trả lời.';
            let ids: number[] | undefined = undefined;
            // Parse JSON id nếu có
            const match = text.match(/\[\s*\d+(?:\s*,\s*\d+)*\s*\]/);
            if (match) {
                try {
                    ids = JSON.parse(match[0]);
                } catch { }
            }
            // Nếu không có id, dò tên khóa học trong text trả lời
            if (!ids) {
                const foundCourses = mockCourses.filter(c => {
                    const lower = text.toLowerCase();
                    return lower.includes(c.title.toLowerCase());
                });
                if (foundCourses.length > 0) {
                    ids = foundCourses.map(c => c.id);
                }
            }
            // Loại bỏ đoạn JSON id khỏi text trả lời hiển thị
            let displayText = text.replace(/\[\s*\d+(?:\s*,\s*\d+)*\s*\]/g, '').replace(/\n{2,}/g, '\n').trim();
            setMessages(msgs => [...msgs, { role: 'bot', text: displayText, ids }]);
        } catch {
            // Fallback: trả lời thân thiện + 1 card product ngẫu nhiên
            const fallbackCourse = mockCourses[Math.floor(Math.random() * mockCourses.length)];
            setMessages(msgs => [
                ...msgs,
                {
                    role: 'bot',
                    text: 'Xin lỗi, hiện tại mình chưa thể tư vấn AI. Bạn có thể tham khảo khoá học "' + fallbackCourse.title + '" nhé! Nếu cần tư vấn thêm, hãy thử lại sau hoặc liên hệ hỗ trợ. Chúc bạn học tốt!',
                    ids: [fallbackCourse.id]
                }
            ]);
        }
        setLoading(false);
        setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    };

    return (
        <>
            <button className={styles.fab} onClick={() => setOpen(o => !o)}>
                {open ? 'Đóng chat' : 'Chatbot'}
            </button>
            {open && (
                <div className={styles.popup}>
                    <div className={styles.header}>Tư vấn AI</div>
                    <div className={styles.body}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={msg.role === 'user' ? styles.userMsg : styles.botMsg}>
                                <div>{msg.text}</div>
                                {msg.ids && msg.ids.length > 0 && (
                                    <div className={styles.suggestedCourses}>
                                        {msg.ids.map(id => {
                                            const course = mockCourses.find(c => c.id === id);
                                            return course ? <CourseCard key={id} course={course} /> : null;
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                        {loading && <div className={styles.skeleton}></div>}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className={styles.inputRow}>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend()}
                            placeholder="Nhập câu hỏi về khoá học..."
                        />
                        <button onClick={handleSend} disabled={loading || !input.trim()}>Gửi</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatbotPopup; 