import PageQuery from "../PageQuery";

export default class ProductQuery extends PageQuery {
    categoryName?: string;

    constructor(keyword: string = "", categoryName: string = "", page: number = 1, pageSize: number = 10) {
        super(keyword, page, pageSize);
        this.categoryName = categoryName;
    }
}