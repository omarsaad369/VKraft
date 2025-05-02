import React, { useEffect, useState } from 'react';
import NotificationItem from '../components/NotificationItem';
import '../styles/NotificationsPage.css';
import defaultNotifications from "../data/notificationsData";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("notifications"));
    if (stored && stored.length > 0) {
      setNotifications(stored);
    } else {
      setNotifications(defaultNotifications);
      localStorage.setItem("notifications", JSON.stringify(defaultNotifications));
    }
  }, []);

  const saveAndSet = (updated) => {
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const markAsRead = (index) => {
    const updated = [...notifications];
    updated[index].status = 'read';
    saveAndSet(updated);
  };

  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, status: 'read' }));
    saveAndSet(updated);
  };

  const clearAllNotifications = () => {
    if (window.confirm("Are you sure you want to delete all notifications?")) {
      setNotifications([]);
      localStorage.removeItem('notifications');
    }
  };

  const reloadDefaults = () => {
    setNotifications(defaultNotifications);
    localStorage.setItem("notifications", JSON.stringify(defaultNotifications));
  };

  const deleteNotification = (id) => {
    const updated = notifications.filter(n => n.id !== id);
    saveAndSet(updated);
  };

  const filtered = notifications.filter(n => {
    const matchType = filterType === "all" || n.type === filterType;
    const matchStatus = filterStatus === "all" || n.status === filterStatus;
    return matchType && matchStatus;
  });

  return (
    <div className="notifications-page">
      <div className="notifications-container">
        <h2 className="notifications-title">🔔 Notifications</h2>

        {notifications.length > 0 && (
          <>
            <div className="notifications-actions">
              <button className="mark-read-btn" onClick={markAllAsRead}>
                🔘 Mark All as Read
              </button>
              <button className="clear-btn" onClick={clearAllNotifications}>
                🗑 Clear All
              </button>
              <button className="reload-btn" onClick={reloadDefaults}>
                ♻️ Load Default Notifications
              </button>
            </div>

            <div className="filters">
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="all">📁 All Types</option>
                <option value="order">📦 Orders</option>
                <option value="system">🛠 System</option>
                <option value="offer">🎁 Offers</option>
              </select>

              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">📋 All Statuses</option>
                <option value="unread">🆕 Unread</option>
                <option value="read">✅ Read</option>
              </select>
            </div>
          </>
        )}

        {filtered.length === 0 ? (
          <p className="no-notifications">No notifications found.</p>
        ) : (
          filtered.map((notif, index) => (
            <NotificationItem
              key={notif.id}
              notification={notif}
              onClick={() => markAsRead(index)}
              onDelete={() => deleteNotification(notif.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
