import React, { useEffect, useState } from 'react';
import '../styles/NotificationsBell.css'; // نضيف ملف CSS منفصل للستايل
export default function NotificationsBell({ onClick, count }) {
  const [shake, setShake] = useState(false);

  // 🔁 اهتزاز الجرس عند وصول إشعار جديد
  useEffect(() => {
    if (count > 0) {
      setShake(true);
      const timeout = setTimeout(() => setShake(false), 600); // مدة الاهتزاز
      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <div
      className={`notifications-bell ${shake ? 'shake' : ''}`}
      onClick={onClick}
    >
      🔔
      {count > 0 && <span className="notification-count">{count}</span>}
    </div>
  );
}
