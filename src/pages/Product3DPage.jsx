// src/pages/Product3DPage.jsx
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { select3DProducts } from "../redux/slices/productSlice";

const Product3DPage = () => {
  const products = useSelector(select3DProducts);

  return (
    <div className="product-list">
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>منتجات الطباعة ثلاثية الأبعاد</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product3DPage;
