import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updatedCartItems = cartItems.map(item => ({
    ...item,
    price: item.price || 350,
    quantity: item.quantity || 1,
  }));

  const handleRemove = (id) => {
    if (window.confirm("❌ هل أنت متأكد من حذف هذا المنتج؟")) {
      dispatch(removeFromCart(id));
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleClearCart = () => {
    if (window.confirm("⚠️ هل تريد إفراغ السلة بالكامل؟")) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-container">
      <h1>🛒 سلة التسوق</h1>

      {updatedCartItems.length === 0 ? (
        <p className="empty-cart">السلة فارغة</p>
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
                  <p className="product-name">{item.name || "منتج مخصص"}</p>

                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <p className="subtotal">
                  </p>
                </div>

                <button onClick={() => handleRemove(item.id)} className="delete-btn">
                  ❌ حذف
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <button onClick={handleClearCart} className="clear-cart-btn">
              🧹 إفراغ السلة
            </button>
          </div>

          <button onClick={() => navigate("/checkout")} className="checkout-btn">
            ✅ إتمام الطلب
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
