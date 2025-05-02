import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    if (window.confirm("⚠️ Are you sure you want to clear the entire cart?")) {
      dispatch(clearCart());
    }
  };

  const updatedCartItems = cartItems.map(item => ({
    ...item,
    price: item.price || 350,
    quantity: item.quantity || 1,
  }));

  const handleRemove = (id) => {
    if (window.confirm("❌ Are you sure you want to remove this item?")) {
      dispatch(removeFromCart(id));
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="cart-container">
      <h1>🛒 Shopping Cart</h1>

      {updatedCartItems.length === 0 ? (
        <p className="empty-cart">🚫 Your cart is currently empty</p>
      ) : (
        <>
          <div className="cart-items-grid">
            {updatedCartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="product-preview" style={{ backgroundColor: item.color }}>
                  {item.image && <img src={item.image} alt="Custom" className="custom-image" />}
                  {item.text && <p className="custom-text">{item.text}</p>}
                </div>

                <div className="cart-details">
                  <p className="product-name">{item.name || "Custom Product"}</p>
                  <p><strong>Size:</strong> {item.size || "Not specified"}</p>
                  <p><strong>Fabric:</strong> {item.fabric || "Not specified"}</p>
                  <p><strong>Color:</strong> <span style={{ color: item.color }}>{item.color}</span></p>

                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <p className="subtotal">
                    <strong>Price:</strong> ${item.price * item.quantity}
                  </p>
                </div>

                <button onClick={() => handleRemove(item.id)} className="delete-btn">
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <button onClick={handleClearCart} className="clear-cart-btn">
              🧹 Clear Cart
            </button>
          </div>

          <button onClick={() => navigate("/checkout")} className="checkout-btn">
            ✅ Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
