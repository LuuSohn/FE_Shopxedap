import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Signin from "./pages/user/signin";

import Signup from "./pages/user/signup";
import { addProduct, deleteProduct, getAllProduct } from "./api/product";

import { IProduct } from "./interface/products";
import { getAllCategory } from "./api/categories";
import HomePage from "./pages/user/HomePage";
import ProductDetail from "./pages/user/prodoductsDetail";
import ProductListByCategory from "./pages/user/productByCate";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllProduct();
      // console.log(data.products.data);
      setProducts(data.products.data);
    })();
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

      setProducts(data.product);

      if (
        window.confirm(
          "Thêm sản phẩm thành công! Bạn có muốn thêm sản phẩm khác?"
        )
      ) {
        navigate("/admin/products/add");
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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllCategory();
      // console.log(data);
      setCategories(data.categories.data);
    })();
  }, []);
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
          <Route
            path="category/:id"
            element={<ProductListByCategory />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
