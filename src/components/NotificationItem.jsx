import React from "react";
import "../styles/NotificationItem.css";

export default function NotificationItem({ notification, onClick, onDelete }) {
  const { title, message, timestamp, status, type } = notification;
  const formattedDate = new Date(timestamp).toLocaleString();

  const getIcon = (type) => {
    switch (type) {
      case 'order':
        return '📦';
      case 'system':
        return '🛠';
      case 'offer':
        return '🎁';
      default:
        return '🔔';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`notification-card ${status === 'unread' ? 'unread' : ''} ${type}`}
    >
      <div className="notification-content">
        <h4 className="notification-title">
          {getIcon(type)} {title}
        </h4>
        <p className="notification-message">{message}</p>
        <span className="notification-date">{formattedDate}</span>
      </div>

      {onDelete && (
        <button
          className="delete-notification-btn"
          onClick={(e) => {
            e.stopPropagation(); // لتجنب تفعيل onClick عند الضغط على زر الحذف
            onDelete();
          }}
        >
          ❌
        </button>
      )}
    </div>
  );
}
