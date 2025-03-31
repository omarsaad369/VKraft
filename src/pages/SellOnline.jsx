import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SellOnline.css"; // تأكد من أن لديك هذا الملف

const SellOnline = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      setProducts([...products, newProduct]);
      setNewProduct({ name: "", price: "", description: "", image: "" }); // إفراغ الحقول
    } else {
      alert("الرجاء تعبئة جميع الحقول");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="sell-online-container">
      <h1>🛍️ منصة البيع</h1>
      <p>هنا يمكنك إضافة منتجاتك وإدارتها بكل سهولة.</p>

      {/* نموذج إضافة المنتج */}
      <div className="add-product-form">
        <h3>إضافة منتج جديد</h3>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="اسم المنتج"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="السعر"
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="وصف المنتج"
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="رابط صورة المنتج"
        />
        <button onClick={handleAddProduct}>إضافة المنتج</button>
      </div>

      {/* قائمة المنتجات */}
      <div className="product-list">
        <h2>قائمة المنتجات</h2>
        {products.length === 0 ? (
          <p>لا توجد منتجات حالياً</p>
        ) : (
          <div className="products">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">
                  <span>EGP</span> {product.price}
                </p>
                <p>{product.description}</p>
                <Link to="/customize">
                  <button>تخصيص المنتج</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellOnline;
