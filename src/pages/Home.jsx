import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";

const Home = ({ searchQuery }) => {
  const products = useSelector((state) => state.products.products);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div className="home-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
