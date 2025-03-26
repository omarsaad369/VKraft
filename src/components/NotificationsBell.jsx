// src/components/NotificationsBell.js
import React from 'react';

export default function NotificationsBell({ onClick, count }) {
  return (
    <div
      onClick={onClick}
      style={{ position: 'relative', cursor: 'pointer', fontSize: '20px' }}
    >
      🔔
      {count > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '10px',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}
