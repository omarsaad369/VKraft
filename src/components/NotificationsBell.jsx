import React, { useEffect, useState } from 'react';
import '../styles/NotificationsBell.css'; 
export default function NotificationsBell({ onClick, count }) {
  const [shake, setShake] = useState(false);


  useEffect(() => {
    if (count > 0) {
      setShake(true);
      const timeout = setTimeout(() => setShake(false), 600);
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
