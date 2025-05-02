import React, { useState } from "react";
import "../../styles/AdminSettings.css";
import { FaUserCog, FaLock, FaBell, FaGlobe, FaSync } from "react-icons/fa";

const AdminSettings = () => {

  const [adminName, setAdminName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("✅ Settings Saved Successfully!");
  };

  return (
    <div className="admin-container">
      <main className="admin-main">
        <h1>⚙️ Admin Settings</h1>

        {}
        <div className="settings-section">
          <h2><FaUserCog /> Account Settings</h2>
          <div className="settings-item">
            <label>Name:</label>
            <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
          </div>
          <div className="settings-item">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        {}
        <div className="settings-section">
          <h2><FaLock /> Security Settings</h2>
          <div className="settings-item">
            <label>New Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="settings-item">
            <label>Enable Two-Factor Authentication:</label>
            <input type="checkbox" />
          </div>
        </div>

        {}
        <div className="settings-section">
          <h2><FaBell /> Notification Settings</h2>
          <div className="settings-item">
            <label>Receive Email Notifications:</label>
            <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
          </div>
        </div>

        {}
        <div className="settings-section">
          <h2><FaGlobe /> Language & Timezone</h2>
          <div className="settings-item">
            <label>Preferred Language:</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>

        {}
        <div className="settings-section">
          <h2><FaSync /> Reset Settings</h2>
          <button className="btnall" onClick={() => alert("⚠️ Settings Reset to Default!")}>
            Reset to Default
          </button>
        </div>

        {}
        <button id="btnall" onClick={handleSave}>
          Save Settings
        </button>
      </main>
    </div>
  );
};

export default AdminSettings;
