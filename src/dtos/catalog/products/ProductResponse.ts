import ImageResponse from "../../misc/images/ImageResponse";

export default interface ProductResponse {
    id: string;
    name: string;
    description: string;
    isMadeToOrder: boolean;

    categoryName: string;

    unitPrice: number;
    unit: string;
    stockQuantity: number;

    primaryImage: ImageResponse;
    images: ImageResponse[];

    isAvailable: boolean;

    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
}