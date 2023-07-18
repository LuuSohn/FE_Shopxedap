import instance from "./instance";

export const getAllProduct = () => {
  return instance.get("/products");
};
export const getOneProduct = (id: number | string) => {
  return instance.get("/products/" + id);
};
export const deleteProduct = (id: number | string) => {
  return instance.delete("/products/" + id);
};
export const addProduct = (products: any) => {
  return instance.post("/products/", products);
};
export const updateProduct = (products: any) => {
  return instance.put("/products/" + products.id, products);
};
