import { PageResult } from "@/src/common/models/result/PageResult";
import apiClient from "../../utils/apiClient";
import ProductResponse from "@/src/dtos/catalog/products/ProductResponse";
import ProductQuery from "@/src/common/models/query/catalog/ProductQuery";
import { buildEndpoint } from "../../utils/enpointBuilder";

export const getProducts = async (query?: ProductQuery): Promise<PageResult<ProductResponse[]>> => {
    try {
        const endpoint = buildEndpoint('/api/products', query);
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getProductById = async (id: string): Promise<ProductResponse> => {
    try {
        const response = await apiClient.get(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}