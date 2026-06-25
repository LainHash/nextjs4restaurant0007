import { getProducts } from '@/src/services/catalog/productService';
import ProductQuery from '@/src/common/models/query/catalog/ProductQuery';
import ProductResponse from '@/src/dtos/catalog/products/ProductResponse';

export const useProducts = async (activeCategory: string, currentPage: number = 1, limit: number = 5) => {
    let products: ProductResponse[] = [];
    let totalPages: number = 1;

    try {
        if (activeCategory) {
            const query = new ProductQuery("", activeCategory, currentPage, limit);
            const response = await getProducts(query);
            products = response?.data || [];
            totalPages = response?.totalPages || 1;
        }
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }

    return { products, totalPages };
};
