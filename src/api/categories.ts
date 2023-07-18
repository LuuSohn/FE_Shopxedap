import instance from "./instance";

export const getAllCategory = () => {
  return instance.get("/categories");
};
export const getOneCategory = (id: number | string) => {
  return instance.get("/categories/" + id);
};
export const deleteCategory = (id: number | string) => {
  return instance.delete("/categories/" + id);
};
export const addCategory = (categories: any) => {
  return instance.post("/categories/", categories);
};
export const updateCategory = (categories: any) => {
  return instance.put("/categories/" + categories.id, categories);
};
