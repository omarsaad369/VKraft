import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: "clothing",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("📦 New product:", formData);

    alert("✅ Product saved successfully!");
    navigate("/admin/manage-products");
  };

  return (
    <div className="add-product-container">
      <div className="header-box">
        <h2>➕ Add New Product</h2>
      </div>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">📝 Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g., White T-shirt"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">🌄 Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="https://example.com/image.jpg"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">📂 Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="3d">3D Products</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          ✅ Save Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
