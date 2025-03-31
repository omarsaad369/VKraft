// src/data/notificationsData.js

const defaultNotifications = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `إشعار ${i + 1}`,
    message: `هذه رسالة الإشعار رقم ${i + 1}.`,
    type: ['order', 'system', 'offer'][i % 3],
    timestamp: new Date().toISOString(),
    status: i % 2 === 0 ? 'unread' : 'read',
  }));
  
  export default defaultNotifications;