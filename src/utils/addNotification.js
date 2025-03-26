import notificationTemplates from "../data/notificationTemplates";

const addNotification = (templateKey, userId, params = {}) => {
  const template = notificationTemplates.find(t => t.key === templateKey);
  if (!template) return;

  const notification = {
    id: `notif_${Date.now()}`,
    userId: userId,
    title: template.title,
    message: template.message(params.orderId, params.trackingNumber, params.reply),
    status: 'unread',
    timestamp: new Date().toISOString()
  };

  const existing = JSON.parse(localStorage.getItem('notifications')) || [];
  existing.push(notification);
  localStorage.setItem('notifications', JSON.stringify(existing));
};

export default addNotification;
