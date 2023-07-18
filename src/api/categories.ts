import instance from "./instance";
import { ICategory } from "../interface/categories";
export const getAllCategory = () => {
  return instance.get("/categories");
};
export const getOneCategory = (id: number | string) => {
  return instance.get("/categories/" + id);
};
export const deleteCategory = (id: number | string) => {
  return instance.delete("/categories/" + id);
};
export const addCategory = (categories: ICategory) => {
  return instance.post("/categories/", categories);
};
export const updateCategory = (categories: ICategory) => {
  return instance.put("/categories/" + categories._id, categories);
};
