import { PageResult } from "@/src/common/models/result/PageResult";
import CategoryResponse from "@/src/dtos/catalog/categories/CategoryResponse";
import apiClient from "../../utils/apiClient";

export const getCategories = async (): Promise<PageResult<CategoryResponse[]>> => {
    try {
        const response = await apiClient.get('/api/categories');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}