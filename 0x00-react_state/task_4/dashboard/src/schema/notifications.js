const NotificationsData = require('../../notifications.json');

function getAllNotificationsByUser(userId) {
  const contextList = [];
  NotificationsData.forEach((notification) => {
    if (notification.author.id === userId) {
      contextList.push(notification.context);
    }
  })
  return contextList;
}

module.exports = getAllNotificationsByUser;
