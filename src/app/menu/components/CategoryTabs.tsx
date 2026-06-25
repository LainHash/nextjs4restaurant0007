"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import CategoryResponse from '@/src/dtos/catalog/categories/CategoryResponse';

interface CategoryTabsProps {
    categories: CategoryResponse[];
    activeCategory: string;
}

export default function CategoryTabs({ categories, activeCategory }: CategoryTabsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const checkArrows = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        // Cho phép dung sai 1px cho các sai số làm tròn pixel
        setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    };

    useEffect(() => {
        // Kiểm tra sau khi render
        checkArrows();
        
        // Thêm event listener khi resize window
        window.addEventListener('resize', checkArrows);
        
        // ResizeObserver cho trường hợp font load hoặc layout shift
        const observer = new ResizeObserver(() => checkArrows());
        if (scrollContainerRef.current) {
            observer.observe(scrollContainerRef.current);
        }

        return () => {
            window.removeEventListener('resize', checkArrows);
            observer.disconnect();
        };
    }, [categories]);

    const scrollBy = (offset: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    if (categories.length === 0) return null;

    return (
        <div className="relative flex items-center mb-12">
            {/* Nút mũi tên trái */}
            {showLeftArrow && (
                <button 
                    onClick={() => scrollBy(-250)}
                    className="absolute left-0 z-10 p-2 rounded-full bg-surface shadow-md border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all transform -translate-x-1/2"
                    aria-label="Cuộn sang trái"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                </button>
            )}

            {/* Vùng chứa các tab có thể cuộn ngang (ẩn thanh cuộn mặc định) */}
            <div 
                ref={scrollContainerRef}
                onScroll={checkArrows}
                className="flex-1 overflow-x-auto no-scrollbar border-b border-outline-variant/30 pb-2"
            >
                <div className="flex w-max mx-auto space-x-8 md:space-x-16 px-6">
                    {categories.map((cat) => {
                        const isActive = cat.name === activeCategory;
                        return (
                            <Link 
                                key={cat.id} 
                                href={`/menu?category=${encodeURIComponent(cat.name)}`}
                                scroll={false}
                                className={`font-headline-sm text-headline-sm pb-2 whitespace-nowrap hover:text-secondary transition-colors ${
                                    isActive ? 'active border-b-2 border-primary text-primary' : 'text-on-surface-variant'
                                }`}
                            >
                                {cat.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Nút mũi tên phải */}
            {showRightArrow && (
                <button 
                    onClick={() => scrollBy(250)}
                    className="absolute right-0 z-10 p-2 rounded-full bg-surface shadow-md border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-all transform translate-x-1/2"
                    aria-label="Cuộn sang phải"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                </button>
            )}
        </div>
    );
}
