const NotificationsData = require("../../notifications.json");
const Normalizer = require("normalizr");
const schema = Normalizer.schema;
const normalize = Normalizer.normalize;

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});
const result = normalize(NotificationsData, [notification]);

// function getAllNotificationsByUser to use the normalized dataset "result"
// return List of context objects where userId is equal to the author.id
function getAllNotificationsByUser(userId) {
  const contextList = [];
  for (const notification in result.entities.notifications) {
    if (result.entities.notifications[notification].author === userId) {
      contextList.push(
        result.entities.messages[
          result.entities.notifications[notification].context
        ]
      );
    }
  }
  return contextList;
}

module.exports = {
  getAllNotificationsByUser,
  result,
};
