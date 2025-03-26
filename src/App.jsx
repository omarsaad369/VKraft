import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import SellOnline from "./pages/SellOnline";
import OrderForYourself from "./pages/OrderForYourself";
import UserProfile from "./pages/UserProfile";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageOrders from "./pages/admin/ManageOrders";
import ManageUsers from "./pages/admin/ManageUsers";
import AdminSettings from "./pages/admin/AdminSettings";
import UploadedImages from "./pages/UploadedImages";
// ✅ استيراد مكون رفع الصور
import UploadImage from "./components/UploadImage";
import ManageUploads from "./pages/admin/ManageUploads";
import Favorites from "./pages/favorites";
import Product3DPage from "./pages/Product3DPage";
import DTFClothingPage from "./pages/DTFClothingPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import NotificationsPage from './pages/NotificationsPage.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Provider store={store}>
      <Router>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sell" element={<SellOnline />} />
          <Route path="/order" element={<OrderForYourself />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* ✅ صفحة رفع الصور */}
          <Route path="/upload-image" element={<UploadImage />} />

          {/* صفحات الإدارة */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ManageProducts />} />
          <Route path="/admin/orders" element={<ManageOrders />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/uploads" element={<UploadedImages />} />
          <Route path="/admin/uploads" element={<ManageUploads />} />
          <Route path="/admin/uploads" element={<ManageUploads />} />
          
          {/* ✅ إضافة مسار صفحة المفضلات */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/3d-printing" element={<Product3DPage />} />
          <Route path="/dtf-clothing" element={<DTFClothingPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;