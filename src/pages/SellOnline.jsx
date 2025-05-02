import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SellOnline.css";

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
      setNewProduct({ name: "", price: "", description: "", image: "" }); // Clear fields
    } else {
      alert("Please fill in all required fields.");
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
      <h1>🛍️ Sell Online Platform</h1>
      <p>Here you can add and manage your products with ease.</p>

      <div className="add-product-form">
        <h3>Add New Product</h3>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Product Description"
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <div className="product-list">
        <h2>Product List</h2>
        {products.length === 0 ? (
          <p>No products added yet.</p>
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
                  <button>Customize Product</button>
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
