import { PageResult } from "@/src/common/models/result/PageResult";
import CategoryResponse from "@/src/dtos/catalog/categories/CategoryResponse";
import apiClient from "../../utils/apiClient";
import PageQuery from "@/src/common/models/query/PageQuery";
import { buildEndpoint } from "../../utils/enpointBuilder";

export const getCategories = async (query?: PageQuery): Promise<PageResult<CategoryResponse[]>> => {
    try {
        const endpoint = buildEndpoint('/api/categories', query);
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}