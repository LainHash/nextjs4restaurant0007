import Link from 'next/link';
import { getProducts } from '@/src/services/catalog/productService';
import { getCategories } from '@/src/services/catalog/categoryService';
import ProductQuery from '@/src/common/models/query/catalog/ProductQuery';
import CategoryResponse from '@/src/dtos/catalog/categories/CategoryResponse';
import ProductResponse from '@/src/dtos/catalog/products/ProductResponse';

export default async function Page({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    // Resolve searchParams promise (Required in Next.js 15+)
    const resolvedParams = await searchParams;
    const categoryParam = resolvedParams?.category;

    let categories: CategoryResponse[] = [];
    let products: ProductResponse[] = [];

    // Fetch list of categories for the tabs
    try {
        const catResponse = await getCategories();
        categories = catResponse?.data || [];
    } catch (error) {
        console.error("Failed to fetch categories:", error);
    }

    // Determine the active category (from URL or fallback to the first one)
    const activeCategory = categoryParam || (categories.length > 0 ? categories[0].name : "");

    // Fetch products ONLY for the active category
    try {
        if (activeCategory) {
            const query = new ProductQuery("", activeCategory, 1, 50); // Lấy tối đa 50 món cho một danh mục
            const response = await getProducts(query);
            products = response?.data || [];
        }
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }

    return (
        <>
            {/* Main Content */}
            <main className="flex-grow pt-24 md:pt-32 pb-section-gap">
                {/* Hero Section */}
                <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16 md:mb-24">
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 text-balance">The Culinary Collection</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto text-balance">
                        A curated selection of seasonal dishes, reflecting our commitment to locally sourced ingredients and modern gastronomic techniques.
                    </p>
                </header>
                
                {/* Menu Tabs */}
                {categories.length > 0 && (
                    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12">
                        <div className="flex overflow-x-auto no-scrollbar border-b border-outline-variant/30 pb-2 md:justify-center space-x-8 md:space-x-16">
                            {categories.map((cat) => {
                                const isActive = cat.name === activeCategory;
                                return (
                                    <Link 
                                        key={cat.id} 
                                        href={`/menu?category=${encodeURIComponent(cat.name)}`}
                                        // Nếu tab đang active thì có style khác biệt (gạch dưới, text màu chính)
                                        className={`tab-btn font-headline-sm text-headline-sm pb-2 whitespace-nowrap hover:text-secondary transition-colors ${
                                            isActive ? 'active border-b-2 border-primary text-primary' : 'text-on-surface-variant'
                                        }`}
                                    >
                                        {cat.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Menu Content */}
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    {categories.length === 0 ? (
                        <div className="text-center text-on-surface-variant py-12">
                            Menu is currently unavailable.
                        </div>
                    ) : (
                        <div className="tab-content active" id={activeCategory.toLowerCase().replace(/\s+/g, '-')}>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                                {/* Text Column */}
                                <div className="lg:col-span-7 space-y-12">
                                    {products.length === 0 ? (
                                        <p className="text-on-surface-variant">No items found for this category.</p>
                                    ) : (
                                        products.map(product => (
                                            <article key={product.id} className="group relative pb-8 border-b border-outline-variant/20 last:border-0">
                                                <div className="flex justify-between items-baseline mb-2">
                                                    <h3 className="font-headline-md text-headline-md text-primary">{product.name}</h3>
                                                    <span className="font-headline-md text-headline-md text-secondary ml-4">${product.unitPrice}</span>
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
                                            <div className="aspect-[4/5] rounded overflow-hidden relative">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    alt={activeCategory} 
                                                    src={products[0]?.primaryImage?.url || 'https://via.placeholder.com/400x500?text=No+Image'} 
                                                />
                                                <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Book Now Banner */}
                <section className="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="book-now">
                    <div className="bg-surface-container-high rounded p-8 md:p-16 text-center relative overflow-hidden">
                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-4">Experience Lumière</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                                Reservations are highly recommended. We accept bookings up to 60 days in advance.
                            </p>
                            <Link className="inline-flex bg-primary text-on-primary px-8 py-4 rounded hover:bg-surface-tint transition-all duration-300 ease-out font-label-md text-label-md focus:ring-2 focus:ring-secondary focus:outline-none" href="/">
                                Reserve Your Table
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}