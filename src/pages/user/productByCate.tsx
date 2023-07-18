import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { IProduct } from "../../interface/products";
const ProductListByCategory = ({ products }: { products: IProduct[] }) => {
  const { id } = useParams<string>();
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.categoryId.some((category) => category._id === id)
    );
    console.log(filteredProducts);
  }, [products, id]);
  return (
    <div>
      <h1>Products in Category {id}</h1>
    </div>
  );
};

export default ProductListByCategory;
