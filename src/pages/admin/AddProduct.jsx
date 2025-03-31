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

    // هنا تقدر تضيف عملية حفظ المنتج فعليًا (API أو Redux)
    console.log("📦 المنتج الجديد:", formData);

    alert("✅ تم حفظ المنتج بنجاح!");
    navigate("/admin/manage-products");
  };

  return (
    <div className="add-product-container">
        <div className="header-box">
            <h2>➕ إضافة منتج جديد</h2>
        </div>    

      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">📝 الاسم:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="مثلاً: تيشيرت أبيض"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">🌄 رابط الصورة:</label>
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
          <label htmlFor="category">📂 التصنيف:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="clothing">ملابس</option>
            <option value="accessories">إكسسوارات</option>
            <option value="3d">منتجات 3D</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          ✅ حفظ المنتج
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
