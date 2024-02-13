import React, { useState, useEffect } from "react";
import { AddProductContainer } from "../../styles/addProduct.style";
import editProduct from "../../hooks/updateProduct";
import getProducts from "../../hooks/getProducts";

const EditProduct = ({ addProductCallBack, productId }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product, "product");
  };

  const productIndex = localStorage.getItem("productId");
  useEffect(() => {
    const products = getProducts() || [];
    console.log(products, "products existing");
    const existingProduct = products.find(
      (product) => product.id === Number(productIndex)
    );
    console.log(existingProduct, "exist");
    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [productId]);

  return (
    <AddProductContainer>
      <h1>Edit Product</h1>
      <input
        placeholder="product name"
        value={product?.name}
        name="name"
        onChange={handleChange}
      />
      <input
        placeholder="product price"
        value={product?.price}
        name="price"
        onChange={handleChange}
      />
      <input
        placeholder="product category"
        name="category"
        value={product?.category}
        onChange={handleChange}
      />
      <input
        placeholder="product rating"
        name="rating"
        value={product?.rating}
        onChange={handleChange}
      />
      <button
        onClick={() =>
          editProduct({ ...product, productId: Number(productIndex) })
        }
      >
        update product
      </button>
    </AddProductContainer>
  );
};

export default EditProduct;
