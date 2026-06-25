import { DataResult } from "./DataResult";

export interface PageResult<T> extends DataResult<T> {
    totalItems: number;
    totalPages: number;
    page: number;
    pageSize: number;
}