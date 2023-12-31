import { ICategory } from "./categories";

export interface IProduct {
  categoryId: ICategory[];
  _id?: number;
  name: string;
  price: number;
  image: string;
  description: string;
}
