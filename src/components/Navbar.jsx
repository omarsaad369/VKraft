import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaDoorOpen, FaBars, FaSearch, FaCog, FaMoon, FaSun } from "react-icons/fa";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/navbar.css";
import "../styles/DarkMode.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // مراقبة حالة المستخدم
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      unsubscribe();
    };
  }, []);

  // تسجيل الخروج
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  // التحقق من الوصول للصفحات المحمية
  const handleProtectedRoute = (path) => {
    user ? navigate(path) : navigate("/signin");
  };

  // البحث
  const handleSearch = (event) => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setDropdownOpen(false);
    }
    event.preventDefault(); // منع إغلاق القائمة عند الضغط على زر البحث
  };

  // إغلاق القائمة بعد الانتقال
  const handleLinkClick = (path) => {
    navigate(path);
    setDropdownOpen(false); // إغلاق القائمة بعد الانتقال
  };

  // تبديل الوضع الليلي
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
    {/* قائمة الهامبورغر */}
      <div className="hamburger-menu" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <FaBars className="menu-icon" /> <span>Categories</span>
        <span onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-toggle">
          
        </span>
        <ul ref={menuRef} className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
          {/* روابط الأقسام */}
          <Link to="/3d-printing" className="admin-link1" onClick={() => handleLinkClick('/3d-printing')}>
            🖨️ 3D Printing
          </Link>
          <Link to="/dtf-clothing" className="admin-link1" onClick={() => handleLinkClick('/dtf-clothing')}>
            👕 DTF Printing
          </Link>
          <Link to="/accessories" className="admin-link1" onClick={() => handleLinkClick('/accessories')}>
            🎁 Accessories Printing
          </Link>

          {/* روابط لوحة التحكم فقط إذا كان المستخدم مدير */}
          {user && user.email === "omarsaad01007342123@gmail.com" && (
            <div className="admin-dropdown">
              <Link to="/admin" className="admin-link" onClick={() => setDropdownOpen(false)}>
                🏠 Dashboard
              </Link>
              <Link to="/admin/products" className="admin-link" onClick={() => setDropdownOpen(false)}>
                📦 Manage Products
              </Link>
              <Link to="/admin/orders" className="admin-link" onClick={() => setDropdownOpen(false)}>
                📑 Manage Orders
              </Link>
              <Link to="/admin/users" className="admin-link" onClick={() => setDropdownOpen(false)}>
                👥 Manage Users
              </Link>
              <Link to="/admin/settings" className="admin-link" onClick={() => setDropdownOpen(false)}>
                ⚙️ Settings
              </Link>
            </div>
          )}

          {/* زر التبديل بين الوضعين داخل القائمة */}
          <li>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? <FaSun /> : <FaMoon />}
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </li>
          </ul>
        </div>

    
      {/* الشعار */}
      <div className="logo">
        <Link to="/">
          <img src="src/assets/icons/Logo_V-Kraft.png" alt="Logo" className="logo-img" />
          <img src="src/assets/icons/LogO V Kraft.png" alt="Logo" className="logo-word" />
        </Link>
      </div>

      {/* مربع البحث */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ابحث هنا..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* قائمة المستخدم */}
      <ul ref={menuRef} className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li><button className="btn-link" onClick={() => handleProtectedRoute("/sell")}>Sell Online</button></li>
        <li><button className="btn-link" onClick={() => handleProtectedRoute("/order")}>Order for Yourself</button></li>

        {user ? (
          <li className="user-menu">
            <Link to="/user-profile" className="user-info">
              <FaUser /> {user.displayName ? user.displayName.split(" ").slice(0, 2).join(" ") : "User"}
            </Link>
            <button className="signout-btn" onClick={handleSignOut}>
              <FaDoorOpen /> Sign Out
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/signin" className="signin-btn"><FaUser /> Sign In</Link></li>
            <li><Link to="/signup" className="signup-btn"><FaUser /> Sign Up</Link></li>
          </>
        )}

        <li><Link to="/cart" className="cart-icon"><FaShoppingCart /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
