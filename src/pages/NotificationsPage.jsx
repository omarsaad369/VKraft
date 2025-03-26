import React, { useEffect, useState } from 'react';
import NotificationItem from '../components/NotificationItem';
import '../styles/NotificationsPage.css';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  // تحميل الإشعارات من localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(stored);
  }, []);

  // تحديد إشعار كمقروء
  const markAsRead = (index) => {
    const updated = [...notifications];
    updated[index].status = 'read';
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  // ✅ تمييز الكل كمقروء
  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, status: 'read' }));
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  // ✅ حذف كل الإشعارات
  const clearAllNotifications = () => {
    const confirmed = window.confirm("هل أنت متأكد من مسح جميع الإشعارات؟");
    if (confirmed) {
      setNotifications([]);
      localStorage.removeItem('notifications');
    }
  };

  return (
    <div className="notifications-page">
      <div className="notifications-container">
        <h2 className="notifications-title">🔔 الإشعارات</h2>

        {/* ✅ أزرار التحكم */}
        {notifications.length > 0 && (
          <div className="notifications-actions">
            <button className="mark-read-btn" onClick={markAllAsRead}>
              🔘 تمييز الكل كمقروء
            </button>
            <button className="clear-btn" onClick={clearAllNotifications}>
              🗑 مسح الكل
            </button>
          </div>
        )}

        {/* ✅ عرض الإشعارات */}
        {notifications.length === 0 ? (
          <p className="no-notifications">لا توجد إشعارات.</p>
        ) : (
          notifications.map((notif, i) => (
            <NotificationItem
              key={notif.id}
              notification={notif}
              onClick={() => markAsRead(i)}
            />
          ))
        )}
      </div>
    </div>
  );
}
