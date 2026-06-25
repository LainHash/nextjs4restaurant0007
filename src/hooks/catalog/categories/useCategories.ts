import { getCategories } from '@/src/services/catalog/categoryService';
import PageQuery from '@/src/common/models/query/PageQuery';
import CategoryResponse from '@/src/dtos/catalog/categories/CategoryResponse';

export const useCategories = async (limit: number = 50) => {
    let categories: CategoryResponse[] = [];
    try {
        const catQuery = new PageQuery("", 1, limit);
        const catResponse = await getCategories(catQuery);
        categories = catResponse?.data || [];
    } catch (error) {
        console.error("Failed to fetch categories:", error);
    }
    return categories;
};
