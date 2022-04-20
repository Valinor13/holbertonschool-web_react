import NotificationsData from "../../notifications.json";
import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});
export const result = normalize(NotificationsData, [notification]);

// function getAllNotificationsByUser to use the normalized dataset "result"
// return List of context objects where userId is equal to the author.id
export function getAllNotificationsByUser(userId) {
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

export function notificationNormalizer(data) {
  return normalize(data, [notification]);
}
