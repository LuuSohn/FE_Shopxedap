import instance from "./instance";
import { ICategory } from "../interface/categories";
interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    categoryId: ICategory,
   
}
const getAllProduct = () => {
    return instance.get("/products");
}
const getOneProduct = (id: number) => {
    return instance.get('/products/' + id)
}
const deleteProduct = (id: number) => {
    return instance.delete('/products/' + id)
}
const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
const updateProduct = (product: any) => {
    return instance.put('/products/' + product.id, product)
}
export { getAllProduct, getOneProduct, deleteProduct, addProduct, updateProduct }