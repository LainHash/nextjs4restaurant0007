"use client";

import { useState } from 'react';
import ProductResponse from '@/src/dtos/catalog/products/ProductResponse';

interface ProductListProps {
    products: ProductResponse[];
    activeCategory: string;
}

export default function ProductList({ products, activeCategory }: ProductListProps) {
    const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

    const activeProduct = products.find(p => p.id === hoveredProductId) || products[0];
    const imageUrl = activeProduct?.primaryImage?.url || 'https://via.placeholder.com/400x500?text=No+Image';

    return (
        <div className="tab-content active" id={activeCategory.toLowerCase().replace(/\s+/g, '-')}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                {/* Text Column */}
                <div className="lg:col-span-7 space-y-12">
                    {products.length === 0 ? (
                        <p className="text-on-surface-variant">No items found for this category.</p>
                    ) : (
                        products.map(product => (
                            <article 
                                key={product.id} 
                                className="group relative pb-8 border-b border-outline-variant/20 last:border-0 cursor-pointer transition-colors hover:bg-surface-variant/20 rounded-lg p-4 -mx-4"
                                onMouseEnter={() => setHoveredProductId(product.id)}
                            >
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-headline-md text-headline-md text-primary">{product.name}</h3>
                                    <span className="font-headline-md text-headline-md text-secondary ml-4">${product.unitPrice.toLocaleString('vi-VN')}</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-4 pr-8">
                                    {product.description}
                                </p>
                                {product.isMadeToOrder && (
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                                            Made to order
                                        </span>
                                    </div>
                                )}
                            </article>
                        ))
                    )}
                </div>
                {/* Image Column */}
                {products.length > 0 && (
                    <div className="hidden lg:block lg:col-span-5 lg:pl-12">
                        <div className="sticky top-32">
                            <div className="aspect-[4/5] rounded overflow-hidden relative transition-opacity duration-300">
                                <img 
                                    key={imageUrl} // Forces re-render/animation on image change
                                    className="w-full h-full object-cover animate-fade-in" 
                                    alt={activeProduct?.name || activeCategory} 
                                    src={imageUrl} 
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
