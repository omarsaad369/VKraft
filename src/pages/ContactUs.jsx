import React, { useState } from 'react';
import "../styles/contactUs.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
      {}
      <section className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Whether you have a question or just want to say hello 👋</p>
      </section>

      {}
      <section className="contact-info">
        <div className="contact-info-item">
          <FaPhoneAlt />
          <div>
            <strong>Phone</strong>
            <p>+20 01007342123</p>
          </div>
        </div>
        <div className="contact-info-item">
          <FaEnvelope />
          <div>
            <strong>Email</strong>
            <p>support@vkraft.com</p>
          </div>
        </div>
        <div className="contact-info-item">
          <FaMapMarkerAlt />
          <div>
            <strong>Address</strong>
            <p>Tanta, Egypt</p>
          </div>
        </div>
      </section>

      {}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        {formSubmitted ? (
          <p className="thank-you-message">🎉 Thank you for reaching out! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit">📨 Send Message</button>
          </form>
        )}
      </section>

      {}
      <section className="contact-social">
        <h3>Follow us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
