export const buildEndpoint = <T extends Record<string, any>>(route: string, query?: T): string => {
    if (!query) return route;

    const params = new URLSearchParams();

    Object.entries(query).forEach(([key, value]) => {
        // Chỉ thêm param nếu value có giá trị hợp lệ (khác undefined, null, chuỗi rỗng)
        if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
        }
    });

    const queryString = params.toString();
    return queryString ? `${route}?${queryString}` : route;
};
