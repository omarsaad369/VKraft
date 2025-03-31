import React, { useEffect, useState } from 'react';
import NotificationItem from '../components/NotificationItem';
import '../styles/NotificationsPage.css';
import defaultNotifications from "../data/notificationsData"; // ✅ استخدام البيانات من الملف

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
    if (window.confirm("هل أنت متأكد من مسح جميع الإشعارات؟")) {
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
        <h2 className="notifications-title">🔔 الإشعارات</h2>

        {notifications.length > 0 && (
          <>
            <div className="notifications-actions">
              <button className="mark-read-btn" onClick={markAllAsRead}>
                🔘 تمييز الكل كمقروء
              </button>
              <button className="clear-btn" onClick={clearAllNotifications}>
                🗑 مسح الكل
              </button>
              <button className="reload-btn" onClick={reloadDefaults}>
                ♻️ تحميل البيانات الافتراضية
              </button>
            </div>

            <div className="filters">
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="all">📁 كل الأنواع</option>
                <option value="order">📦 الطلبات</option>
                <option value="system">🛠 النظام</option>
                <option value="offer">🎁 العروض</option>
              </select>

              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">📋 الكل</option>
                <option value="unread">🆕 غير مقروء</option>
                <option value="read">✅ مقروء</option>
              </select>
            </div>
          </>
        )}

        {filtered.length === 0 ? (
          <p className="no-notifications">لا توجد إشعارات.</p>
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
