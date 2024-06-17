import { Category } from "../Category/Category";

export interface Product {
    id: string;
    name: string;
    photo: string;
    category: Category;
    createdAt: string;
    price: number;
    description?: string;
    oldPrice?: number;
}
  