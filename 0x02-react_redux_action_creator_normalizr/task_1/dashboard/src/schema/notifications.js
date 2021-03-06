const NotificationsData = require('../../notifications.json');
const Normalizer = require('normalizr');
const schema = Normalizer.schema;
const normalize = Normalizer.normalize;

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", { author: user, context: message });
const result = normalize(NotificationsData, [notification]);

function getAllNotificationsByUser(userId) {
  const contextList = [];
  NotificationsData.forEach((notification) => {
    if (notification.author.id === userId) {
      contextList.push(notification.context);
    }
  })
  return contextList;
}

module.exports = {
  getAllNotificationsByUser,
  result,
};
