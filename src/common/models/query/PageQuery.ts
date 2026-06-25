export default class PageQuery {
    keyword?: string;
    page: number;
    pageSize: number;

    constructor(keyword: string = "", page: number = 1, pageSize: number = 10) {
        this.keyword = keyword;
        this.page = page;
        this.pageSize = pageSize;
    }
}