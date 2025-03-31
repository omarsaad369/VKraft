// src/pages/SearchResultsPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const SearchResultsPage = () => {
  const location = useLocation();
  const products = useSelector((state) => state.products.products);
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="search-results-container">
      <h1 className="search-title">نتائج البحث عن: "{query}"</h1>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results-message">لا توجد منتجات مطابقة.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
