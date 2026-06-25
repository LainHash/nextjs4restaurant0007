import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    category: string;
}

export default function Pagination({ currentPage, totalPages, category }: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPageUrl = (page: number) => {
        const cat = encodeURIComponent(category);
        return `/menu?category=${cat}&page=${page}`;
    };

    return (
        <div className="flex justify-center items-center space-x-2 mt-12 mb-8">
            {/* Previous Button */}
            {currentPage > 1 ? (
                <Link 
                    href={getPageUrl(currentPage - 1)} 
                    scroll={false}
                    className="px-4 py-2 rounded border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
                >
                    &laquo; Previous
                </Link>
            ) : (
                <span className="px-4 py-2 rounded border border-outline-variant/10 text-outline-variant cursor-not-allowed">
                    &laquo; Previous
                </span>
            )}

            {/* Page Numbers */}
            <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    const isActive = page === currentPage;
                    return (
                        <Link
                            key={page}
                            href={getPageUrl(page)}
                            scroll={false}
                            className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${
                                isActive 
                                    ? 'bg-primary text-on-primary' 
                                    : 'hover:bg-surface-variant text-on-surface'
                            }`}
                        >
                            {page}
                        </Link>
                    );
                })}
            </div>

            {/* Next Button */}
            {currentPage < totalPages ? (
                <Link 
                    href={getPageUrl(currentPage + 1)} 
                    scroll={false}
                    className="px-4 py-2 rounded border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
                >
                    Next &raquo;
                </Link>
            ) : (
                <span className="px-4 py-2 rounded border border-outline-variant/10 text-outline-variant cursor-not-allowed">
                    Next &raquo;
                </span>
            )}
        </div>
    );
}
