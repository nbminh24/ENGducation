import React from 'react';

interface SidebarProps {
    filter: any;
    setFilter: (f: any) => void;
    courses: any[];
    style?: React.CSSProperties;
}

const priceOptions = [
    { label: '< 500K', value: 'lt500' },
    { label: '500K – 1 triệu', value: '500to1m' },
    { label: '> 1 triệu', value: 'gt1m' },
];

const ratingOptions = [1, 2, 3, 4, 5];

const handleRatingChange = (filter: any, setFilter: any, r: number) => {
    const arr = Array.isArray(filter.rating) ? filter.rating : [];
    if (arr.includes(r)) {
        setFilter((f: any) => ({ ...f, rating: arr.filter((x: number) => x !== r) }));
    } else {
        setFilter((f: any) => ({ ...f, rating: [...arr, r] }));
    }
};

const CourseCatalogSidebar: React.FC<SidebarProps> = ({ filter, setFilter, style }) => (
    <aside style={{ width: 200, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(53,64,232,0.06)', padding: 24, minHeight: 600, ...style }}>
        <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: 12 }}>Giá</h3>
            <div>
                {priceOptions.map(opt => (
                    <label key={opt.value} style={{ display: 'block', marginBottom: 6 }}>
                        <input
                            type="radio"
                            name="price"
                            checked={filter.price === opt.value}
                            onChange={() => setFilter((f: any) => ({ ...f, price: opt.value }))}
                        />
                        <span style={{ marginLeft: 8 }}>{opt.label}</span>
                    </label>
                ))}
                <label style={{ display: 'block', marginTop: 6 }}>
                    <input type="radio" name="price" checked={!filter.price} onChange={() => setFilter((f: any) => ({ ...f, price: undefined }))} />
                    <span style={{ marginLeft: 8 }}>Tất cả</span>
                </label>
            </div>
        </div>
        <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: 12 }}>Rating</h3>
            <div>
                {ratingOptions.map(r => (
                    <label key={r} style={{ display: 'block', marginBottom: 6 }}>
                        <input
                            type="checkbox"
                            name="rating"
                            checked={Array.isArray(filter.rating) && filter.rating.includes(r)}
                            onChange={() => handleRatingChange(filter, setFilter, r)}
                        />
                        <span style={{ marginLeft: 8 }}>{r} sao</span>
                    </label>
                ))}
                <label style={{ display: 'block', marginTop: 6 }}>
                    <input type="checkbox" name="rating" checked={!filter.rating || filter.rating.length === 0} onChange={() => setFilter((f: any) => ({ ...f, rating: [] }))} />
                    <span style={{ marginLeft: 8 }}>Tất cả</span>
                </label>
            </div>
        </div>
    </aside>
);

export default CourseCatalogSidebar; 