import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import "../styles/favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((product) => product.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const clearFavorites = () => {
    if (window.confirm("⚠️ Are you sure you want to remove all items from favorites?")) {
      setFavorites([]);
      localStorage.removeItem("favorites");
    }
  };

  return (
    <div className="favorites-page">
      <h1>❤️ My Favorite Products</h1>

      {favorites.length > 0 && (
        <button className="clear-favorites-btn" onClick={clearFavorites}>
          🧹 Clear Favorites
        </button>
      )}

      <div className="favorites-list">
        {favorites.length === 0 ? (
          <p className="no-favorites">You have no favorite products yet.</p>
        ) : (
          favorites.map((product) => (
            <div key={product.id} className="favorite-item">
              <img src={product.image} alt={product.name} />
              <div className="favorite-item-details">
                <h3>{product.name}</h3>
                {product.price && (
                  <p className="favorite-price">💰 Price: {product.price} EGP</p>
                )}
                <div className="favorite-actions">
                  <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
                    🛒 Add to Cart
                  </button>
                  <button onClick={() => removeFromFavorites(product.id)} className="remove-btn">
                    ❌ Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
