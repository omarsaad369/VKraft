import React, { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setText, setImage, setSize, setFabric } from "../redux/slices/customizationSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { SketchPicker } from "react-color";
import Draggable from "react-draggable";
import "../styles/customize.css";

const Customize = () => {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [customSize, setCustomSize] = useState("");
  const [shouldSuggestSize, setShouldSuggestSize] = useState(false);

  const handleColorChange = useCallback((color) => {
    dispatch(setColor(color.hex));
  }, [dispatch]);

  const handleTextChange = useCallback((e) => {
    dispatch(setText(e.target.value));
  }, [dispatch]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5000000) {
      const reader = new FileReader();
      reader.onloadend = () => dispatch(setImage(reader.result));
      reader.readAsDataURL(file);
    } else {
      alert("❌ Image size exceeds 5MB");
    }
  };

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    dispatch(setSize(selectedSize));
    setShouldSuggestSize(selectedSize === "custom");
  };

  const handleFabricChange = (e) => {
    dispatch(setFabric(e.target.value));
  };

  const handleAddToCart = useCallback(() => {
    const customizedProduct = {
      id: Date.now(),
      color: customization.color,
      text: customization.text,
      image: customization.image,
      size: customization.size === "custom" ? customSize : customization.size,
      fabric: customization.fabric,
    };
    dispatch(addToCart(customizedProduct));
  }, [dispatch, customization, customSize]);

  const shareDesign = () => {
    const params = new URLSearchParams({
      color: customization.color,
      text: customization.text,
      image: customization.image,
      size: customization.size,
      fabric: customization.fabric,
    });
    const shareUrl = `${window.location.origin}/customize?${params.toString()}`;
    navigator.clipboard.writeText(shareUrl);
    alert("📎 Link copied! Share it with others.");
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("customImage");
    if (savedImage) {
      dispatch(setImage(savedImage));
      localStorage.removeItem("customImage");
    }
  }, [dispatch]);

  return (
    <div className="customize-container">
      <h1>🎨 Customize Your Product</h1>

      <div className="customization-options">
        <label>🎨 Choose Product Color:</label>
        <SketchPicker color={customization.color} onChange={handleColorChange} />

        <label>✍️ Add Custom Text:</label>
        <input type="text" value={customization.text} onChange={handleTextChange} placeholder="Enter text here" />

        <label>📷 Upload Custom Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <label>📏 Select Size:</label>
        <select onChange={handleSizeChange} value={customization.size} className="SelectSize">
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="custom">Custom Size</option>
        </select>

        {shouldSuggestSize && (
          <div className="custom-size-container">
            <label>🧍 Enter Your Custom Size:</label>
            <input type="text" value={customSize} onChange={(e) => setCustomSize(e.target.value)} placeholder="e.g. Chest: 90cm, Length: 65cm" />
          </div>
        )}

        <label>🧵 Select Fabric Type:</label>
        <select onChange={handleFabricChange} value={customization.fabric} className="SelectSize">
          <option value="cotton">Cotton</option>
          <option value="polyester">Polyester</option>
          <option value="silk">Silk</option>
        </select>
      </div>

      <div className="preview">
        <h2>👕 Live Preview</h2>
        <div
          className="product-preview"
          style={{
            backgroundColor: customization.color,
            backgroundImage: 'url("/images/shirt-outline.png")',
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {customization.image && (
            <Draggable nodeRef={imageRef}>
              <img ref={imageRef} src={customization.image} alt="Custom" className="custom-image" />
            </Draggable>
          )}
          {customization.text && (
            <Draggable nodeRef={textRef}>
              <p ref={textRef} className="custom-text">{customization.text}</p>
            </Draggable>
          )}
        </div>
      </div>

      <div className="button-container">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>🛒 Add to Cart</button>
        <button className="share-btn" onClick={shareDesign}>🔗 Share Design</button>
      </div>
    </div>
  );
};

export default Customize;
