import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const AccessoriesPage = () => {
  const products = useSelector((state) =>
    state.products.products.filter((product) => product.category === "accessories")
  );

  return (
    <div className="product-list">
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>منتجات الإكسسوارات (Accessories Printing)</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
