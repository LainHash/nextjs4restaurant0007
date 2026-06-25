import Link from 'next/link';
import { getProducts } from '@/src/services/catalog/productService';
import { getCategories } from '@/src/services/catalog/categoryService';
import ProductQuery from '@/src/common/models/query/catalog/ProductQuery';
import PageQuery from '@/src/common/models/query/PageQuery';
import CategoryResponse from '@/src/dtos/catalog/categories/CategoryResponse';
import ProductResponse from '@/src/dtos/catalog/products/ProductResponse';
import ProductList from './components/ProductList';
import CategoryTabs from './components/CategoryTabs';

export default async function Page({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    // Resolve searchParams promise (Required in Next.js 15+)
    const resolvedParams = await searchParams;
    const categoryParam = resolvedParams?.category;

    let categories: CategoryResponse[] = [];
    let products: ProductResponse[] = [];

    // Fetch list of categories for the tabs
    try {
        const catQuery = new PageQuery("", 1, 50); // Get up to 50 categories
        const catResponse = await getCategories(catQuery);
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
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    <CategoryTabs categories={categories} activeCategory={activeCategory} />
                </div>

                {/* Menu Content */}
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    {categories.length === 0 ? (
                        <div className="text-center text-on-surface-variant py-12">
                            Menu is currently unavailable.
                        </div>
                    ) : (
                        <ProductList products={products} activeCategory={activeCategory} />
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