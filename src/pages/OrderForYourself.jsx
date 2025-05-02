import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import "../styles/OrderForYourself.css";
import addNotification from "../utils/addNotification";

const OrderForYourself = ({ searchQuery }) => {
  const products = useSelector((state) => state.products.products);

  const searchQueryLower = searchQuery ? searchQuery.toLowerCase() : "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQueryLower) // Case-insensitive search
  );

  const userId = "user123"; // You would retrieve this from the logged-in user
  const orderId = 456;

  // Example notification trigger
  addNotification("order_completed", userId, { orderId });

  return (
    <div className="order-container">
      <h1 className="page-title">🛒 Shop Products</h1>
      <p className="page-description">Browse all available products and start shopping now!</p>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products-message">No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default OrderForYourself;
