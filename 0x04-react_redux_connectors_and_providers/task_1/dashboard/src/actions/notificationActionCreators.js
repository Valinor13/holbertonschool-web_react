import { bindActionCreators } from "redux";
import { NotificationActionType } from "./notificationActionTypes";

// function markAsRead accepts index and returns an action
export const markAsRead = (index) => {
  return {
    type: NotificationActionType.MARK_AS_READ,
    index,
  };
}

// function setNotificationFilter accepts filter and returns an action
export const setNotificationFilter = (filter) => {
  return {
    type: NotificationActionType.SET_TYPE_FILTER,
    filter,
  };
}

const boundNotificationActions = () =>
  bindActionCreators({ markAsRead, setNotificationFilter }, dispatch);
