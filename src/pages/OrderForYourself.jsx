import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import "../styles/OrderForYourself.css";
import addNotification from "../utils/addNotification";

const OrderForYourself = ({ searchQuery }) => {
  const products = useSelector((state) => state.products.products);

  // التحقق من وجود قيمة searchQuery
  const searchQueryLower = searchQuery ? searchQuery.toLowerCase() : "";

  // تصفية المنتجات بناءً على البحث
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQueryLower) // البحث بدون حساسية لحالة الأحرف
  );

  const userId = "user123"; // هنا تجيب الـ id من المستخدم المسجل
  const orderId = 456;
  
  addNotification("order_completed", userId, { orderId });
  
  return (
    <div className="order-container">
      <h1 className="page-title">🛒 تسوق المنتجات</h1>
      <p className="page-description">استعرض جميع المنتجات المتاحة وابدأ بالشراء الآن!</p>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products-message">لا توجد منتجات مطابقة لبحثك</p>
        )}
      </div>
    </div>
  );
};

export default OrderForYourself;
