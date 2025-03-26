import React, { useState, useEffect } from "react";
import "../styles/Favorites.css";

// المفضلات يتم جلبها من localStorage إذا كانت موجودة
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // جلب المفضلات من localStorage عند تحميل الصفحة
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // دالة لإزالة منتج من المفضلة
  const removeFromFavorites = (id) => {
    // إزالة المنتج من المفضلات
    const updatedFavorites = favorites.filter((product) => product.id !== id);
    setFavorites(updatedFavorites);
    // تحديث المفضلات في localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-page">
      <h1>منتجاتي المفضلة</h1>
      <div className="favorites-list">
        {favorites.length === 0 ? (
          <p>لا توجد منتجات مفضلة حتى الآن.</p>
        ) : (
          favorites.map((product) => (
            <div key={product.id} className="favorite-item">
              {/* استخدام product.image بدلاً من product.imageUrl */}
              <img src={product.image} alt={product.name} />
              <div className="favorite-item-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">السعر: {product.price} جنيه </p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(product.id)}
                >
                  إزالة من المفضلة
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
