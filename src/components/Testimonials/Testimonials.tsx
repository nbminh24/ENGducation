import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './Testimonials.module.scss';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import { fetchTestimonials, mockTestimonials } from '../../services/mockApi';

const VISIBLE_COUNT = 4;
const QUEUE_COUNT = VISIBLE_COUNT + 1; // 5 cards for queue effect

const Testimonials: React.FC = () => {
    const [testimonials, setTestimonials] = useState(mockTestimonials);
    const [queue, setQueue] = useState(mockTestimonials.slice(0, QUEUE_COUNT));
    const [startIndex, setStartIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [translate, setTranslate] = useState(0); // percent
    const transitionTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        fetchTestimonials().then((data) => {
            setTestimonials(data);
            setStartIndex(0);
            setQueue(data.slice(0, QUEUE_COUNT));
        });
    }, []);

    const total = testimonials.length;

    // Slide next: animate, then update queue
    const slideNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTranslate(-100 / QUEUE_COUNT); // Move left by 1 card
        if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
        transitionTimeout.current = setTimeout(() => {
            // After animation, update queue
            const newStart = (startIndex + 1) % total;
            const newQueue = [];
            for (let i = 0; i < QUEUE_COUNT; i++) {
                newQueue.push(testimonials[(newStart + i) % total]);
            }
            setQueue(newQueue);
            setStartIndex(newStart);
            setTranslate(0); // Reset position (no animation)
            setIsTransitioning(false);
        }, 800);
    }, [isTransitioning, startIndex, testimonials, total]);

    // Slide prev: animate right, then update queue
    const slidePrev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTranslate(100 / QUEUE_COUNT); // Move right by 1 card
        if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
        transitionTimeout.current = setTimeout(() => {
            // Calculate new start index (move back 1)
            const newStart = (startIndex - 1 + total) % total;
            const newQueue = [];
            for (let i = 0; i < QUEUE_COUNT; i++) {
                newQueue.push(testimonials[(newStart + i) % total]);
            }
            setQueue(newQueue);
            setStartIndex(newStart);
            setTranslate(0); // Reset position (no animation)
            setIsTransitioning(false);
        }, 800);
    }, [isTransitioning, startIndex, testimonials, total]);

    // Auto-advance effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                slideNext();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isTransitioning, slideNext]);

    // Touch support
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const startX = touch.clientX;
        const handleTouchEnd = (e: TouchEvent) => {
            const touch = e.changedTouches[0];
            const endX = touch.clientX;
            const diffX = startX - endX;
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    slideNext();
                } else {
                    slidePrev();
                }
            }
            document.removeEventListener('touchend', handleTouchEnd);
        };
        document.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <section className={styles.testimonials}>
            <h2 className={styles.title}>Học viên nói gì về ENGducation?</h2>
            <div className={styles.slideContainer}>
                <div
                    className={styles.grid}
                    style={{
                        transform: `translateX(${translate}%)`,
                        transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none',
                    }}
                    onTouchStart={handleTouchStart}
                >
                    {queue.map((t, index) => (
                        <div key={`${t.id}-${index}`} className={styles.gridItem}>
                            <TestimonialCard testimonial={t} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.navigation}>
                <button
                    className={styles.navButton}
                    onClick={slidePrev}
                    disabled={isTransitioning}
                >
                    ‹
                </button>
                <button
                    className={styles.navButton}
                    onClick={slideNext}
                    disabled={isTransitioning}
                >
                    ›
                </button>
            </div>
        </section>
    );
};

export default Testimonials;