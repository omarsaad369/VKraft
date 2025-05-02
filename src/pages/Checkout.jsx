import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: "credit-card",
    shippingMethod: "standard",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    walletNumber: "",
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [shippingCost, setShippingCost] = useState(20);

  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });

    if (e.target.name === "shippingMethod") {
      setShippingCost(e.target.value === "express" ? 50 : 20);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 350), 0) + shippingCost;

  const handleConfirmOrder = () => {
    if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.address || !shippingInfo.phone) {
      alert("⚠️ Please fill in all required shipping information!");
      return;
    }

    localStorage.setItem("lastOrder", JSON.stringify({ cartItems, shippingInfo, totalPrice }));

    setOrderConfirmed(true);

    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  if (orderConfirmed) {
    return (
      <div className="success-container">
        <h1>🎉 Your order has been successfully confirmed!</h1>
        <p>📦 It will be prepared and shipped soon.</p>
        <button onClick={() => navigate("/")} className="go-home-btn">🏠 Return to Homepage</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>✅ Complete Your Order</h1>

      <div className="shipping-form">
        <label>📛 Full Name:</label>
        <input type="text" name="name" value={shippingInfo.name} onChange={handleInputChange} required />

        <label>📧 Email:</label>
        <input type="email" name="email" value={shippingInfo.email} onChange={handleInputChange} required />

        <label>🏠 Address:</label>
        <input type="text" name="address" value={shippingInfo.address} onChange={handleInputChange} required />

        <label>🏙️ City:</label>
        <input type="text" name="city" value={shippingInfo.city} onChange={handleInputChange} required />

        <label>📞 Phone Number:</label>
        <input type="tel" name="phone" value={shippingInfo.phone} onChange={handleInputChange} required />

        <label>💳 Payment Method:</label>
        <select name="paymentMethod" value={shippingInfo.paymentMethod} onChange={handleInputChange}>
          <option value="credit-card">💳 Credit Card</option>
          <option value="vodafone-cash">📱 Vodafone Cash</option>
          <option value="etisalat-cash">📱 Etisalat Cash</option>
          <option value="orange-cash">📱 Orange Cash</option>
          <option value="cod">💵 Cash on Delivery</option>
        </select>

        {shippingInfo.paymentMethod === "credit-card" && (
          <>
            <label>💳 Card Number:</label>
            <input type="text" name="cardNumber" value={shippingInfo.cardNumber} onChange={handleInputChange} placeholder="**** **** **** ****" required />
            
            <label>📅 Expiry Date:</label>
            <input type="text" name="expiryDate" value={shippingInfo.expiryDate} onChange={handleInputChange} placeholder="MM/YY" required />

            <label>🔒 CVV:</label>
            <input type="text" name="cvv" value={shippingInfo.cvv} onChange={handleInputChange} placeholder="***" required />
          </>
        )}

        {(shippingInfo.paymentMethod === "vodafone-cash" ||
          shippingInfo.paymentMethod === "etisalat-cash" ||
          shippingInfo.paymentMethod === "orange-cash") && (
          <>
            <label>📱 Wallet Number:</label>
            <input type="text" name="walletNumber" value={shippingInfo.walletNumber} onChange={handleInputChange} placeholder="Enter mobile wallet number" required />
          </>
        )}

        <label>🚚 Shipping Method:</label>
        <select name="shippingMethod" value={shippingInfo.shippingMethod} onChange={handleInputChange}>
          <option value="standard">🚛 Standard Shipping (EGP 20)</option>
          <option value="express">⚡ Express Shipping (EGP 50)</option>
        </select>
      </div>

      <button onClick={handleConfirmOrder} className="confirm-order-btn">
        ✅ Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
