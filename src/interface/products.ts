import { ICategory } from "./categories";

export interface IProduct {
  categoryId: ICategory[];
  _id?: number;
  name: string;
  price: number;
  image: {
    url: string;
    publicId: string;
  };
  description: string;
}
