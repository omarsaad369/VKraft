// NotificationItem.js
import React from 'react';
import '../styles/NotificationItem.css'; // ✨

export default function NotificationItem({ notification, onClick }) {
  const { title, message, timestamp, status } = notification;
  const date = new Date(timestamp).toLocaleString();

  return (
    <div
      onClick={onClick}
      className={`notification-card ${status === 'unread' ? 'unread' : ''}`}
    >
      <h4 className="notification-title">{title}</h4>
      <p className="notification-message">{message}</p>
      <span className="notification-date">{date}</span>
    </div>
  );
}
