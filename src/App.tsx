import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Signin from "./pages/user/signin";

import Signup from "./pages/user/signup";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "./api/product";

import { IProduct } from "./interface/products";
import { ICategory } from "./interface/categories";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/categories";
import HomePage from "./pages/user/HomePage";
import ProductDetail from "./pages/user/prodoductsDetail";
import ProductListByCategory from "./pages/user/productByCate";

import AddProductPage from "./pages/admin/product/AddProduct";
import ProductManagementPage from "./pages/admin/product/ProductManagement";
import UpdateProductPage from "./pages/admin/product/UpdateProduct";
import CategoryManagementPage from "./pages/admin/category/CategoryManagement";
import AddCategoryPage from "./pages/admin/category/AddCategory";
import UpdateCategoryPage from "./pages/admin/category/UpdateCategory";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data.products.data));
  }, []);
  const onHandleRemove = async (id: number | string) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
      if ((error = 401)) {
        alert("Không có quyền xóa");
      }
    }
  };
  const onHandleAdd = async (product: IProduct[]) => {
    try {
      const { data } = await addProduct(product);
      console.log(data);

      setProducts(data.product.data);

      if (
        window.confirm(
          "Thêm sản phẩm thành công! Bạn có muốn thêm sản phẩm khác?"
        )
      ) {
        navigate("/admin/products");
        window.location.reload();
      } else {
        navigate("/admin/products");
      }
    } catch (error) {
      console.log(error);
      if (error == 401) {
        alert("Bạn không có quyền thêm sản phẩm, vui lòng đăng nhập admin");
      }
      if (error != 401) {
        alert("Không được bỏ trống");
      }
    }
  };

  const onHandleUpdate = (product: IProduct) => {
    console.log(product);

    updateProduct(product).then(() => {
      getAllProduct().then(({ data }) => setProducts(data.products.data));
      alert("Cập nhật thành công");
      navigate("/admin/products");
    });
  };

  /// Category
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  useEffect(() => {
    (async () => {
      const { data } = await getAllCategory();
      // console.log(data);
      setCategories(data.categories.data);
    })();
  }, []);

  const onHandleAddCate = async (category: ICategory[]) => {
    try {
      const { data } = await addCategory(category);
      console.log(data);

      setCategories(data.category.data);

      if (
        window.confirm(
          "Thêm Danh mục thành công! Bạn có muốn thêm danh mục khác?"
        )
      ) {
        navigate("/admin/category/add");
      } else {
        navigate("/admin/category");
      }
    } catch (error) {
      console.log(error);
      if (error == 401) {
        alert("Bạn không có quyền thêm danh mục, vui lòng đăng nhập admin");
      }
      if (error != 401) {
        alert("Không được bỏ trống");
      }
    }
  };

  const onHandleRemoveCate = async (id: number | string) => {
    try {
      alert("Bạn có chắc xóa hay ko");
      await deleteCategory(id);
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.log(error);
      if ((error = 401)) {
        alert("Không có quyền xóa");
      }
    }
  };

  const onHandleUpdateCate = (category: ICategory) => {
    updateCategory(category)
      .then(() => {
        getAllCategory().then(({ data }) =>
          setCategories(data.categories.data)
        );
        alert("Cập nhật thành công");
        navigate("/admin/category");
      })
      .catch((err) => {
        console.log("Error updating product:", err);
      });
  };
  return (
    <div className="App ">
      <Routes>
        <Route path="/">
          <Route
            index
            element={<HomePage products={products} category={categories} />}
          ></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route
            path="products/:id"
            element={<ProductDetail category={categories} />}
          ></Route>
          {/* <Route
            path="category/:id"
            element={<ProductListByCategory />}
          ></Route> */}

          <Route path="/admin">
            <Route path="products">
              <Route
                index
                element={
                  <ProductManagementPage
                    products={products}
                    onRemove={onHandleRemove}
                  />
                }
              />
              <Route
                path="add"
                element={<AddProductPage onAdd={onHandleAdd} />}
              />
              <Route
                path=":id/update"
                element={
                  <UpdateProductPage
                    onUpdate={onHandleUpdate}
                    products={products}
                  />
                }
              />
            </Route>
            <Route path="category">
              <Route
                index
                element={
                  <CategoryManagementPage
                    categories={categories}
                    onRemove={onHandleRemoveCate}
                  />
                }
              />
              <Route
                path="add"
                element={<AddCategoryPage onAdd={onHandleAddCate} />}
              />
              <Route
                path=":id/update"
                element={
                  <UpdateCategoryPage
                    onUpdate={onHandleUpdateCate}
                    categories={categories}
                  />
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
