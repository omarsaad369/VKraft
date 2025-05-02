import React from "react";
import "../styles/Help.css";
import { FaQuestionCircle, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Help = () => {
  return (
    <div className="help-container">
      <header className="help-header">
        <FaQuestionCircle className="help-icon" />
        <h1>Help & Support Center</h1>
        <p>Welcome to VKraft’s support center – we're here to assist you every step of the way!</p>
      </header>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>📌 How can I place an order?</h3>
            <p>Go to the Products section, choose what you like, then click "Customize" or "Add to Cart" and follow the checkout steps easily.</p>
          </div>
          <div className="faq-item">
            <h3>💳 What payment methods are available?</h3>
            <p>We offer multiple options: Cash on Delivery, Bank Transfer, and online payment via cards.</p>
          </div>
          <div className="faq-item">
            <h3>🚚 How do I track my order?</h3>
            <p>Once confirmed, you will receive a tracking number inside your account under "My Orders".</p>
          </div>
          <div className="faq-item">
            <h3>✏️ Can I modify my order after submitting?</h3>
            <p>Yes, as long as it's not yet processed. Contact us immediately for assistance.</p>
          </div>
          <div className="faq-item">
            <h3>📦 How long does delivery take?</h3>
            <p>Delivery usually takes between 2 to 5 business days depending on your location.</p>
          </div>
          <div className="faq-item">
            <h3>🧵 Can I customize sizes and colors?</h3>
            <p>Absolutely! On the customization page, you can choose preferred colors and sizes or enter custom measurements.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>📬 Contact Us</h2>
        <p>If you couldn't find your answer, feel free to reach us through:</p>
        <div className="contact-info">
          <p><FaEnvelope /> TeamLeader@vkraft.com</p>
          <p><FaPhoneAlt /> +20 01007342123</p>
          <p><FaWhatsapp /> WhatsApp: +20 01007342123</p>
          <p><FaTelegramPlane /> Telegram: @VKraftSupport</p>
        </div>
        <div className="support-tips">
          <h4>Quick Tips:</h4>
          <ul>
            <li>📸 Send a screenshot if you're facing an issue.</li>
            <li>⏱ Support is available daily from 9:00 AM to 6:00 PM.</li>
            <li>🧾 Providing your order number helps us assist you faster.</li>
          </ul>
        </div>
      </section>

      <footer className="help-footer">
        <p>Thank you for choosing VKraft – your comfort and happiness are our top priorities.</p>
      </footer>
    </div>
  );
};

export default Help;
