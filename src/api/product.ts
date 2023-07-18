import instance from "./instance";

const getAllProduct = () => {
  return instance.get("/products");
};
const getOneProduct = (id: any) => {
  return instance.get("/products/" + id);
};
const deleteProduct = (id: any) => {
  return instance.delete("/products/" + id);
};
const addProduct = (product: any) => {
  return instance.post("/products", product);
};
const updateProduct = (product: any) => {
  return instance.put("/products/" + product.id, product);
};
export {
  getAllProduct,
  getOneProduct,
  deleteProduct,
  addProduct,
  updateProduct,
};
