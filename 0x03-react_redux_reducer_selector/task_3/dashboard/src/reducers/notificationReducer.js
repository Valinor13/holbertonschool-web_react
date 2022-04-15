import {
  NotificationTypeFilters,
  NotificationActionType,
} from "../actions/notificationActionTypes";

const defaultState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export default function notificationReducer(state = defaultState, action) {
  switch (action.type) {
    case NotificationActionType.FETCH_NOTIFICATIONS_SUCCESS:
      const success = action.data.map((notification) => {
        return {
          ...notification,
          isRead: false,
        };
      });
      return {
        filter: state.filter,
        notifications: success,
      };
    case NotificationActionType.MARK_AS_READ:
      const read = state.notifications.map((notification) => {
        if (notification.id === action.index) {
          return {
            ...notification,
            isRead: true,
          };
        } else {
          return notification;
        }
      });
      return {
        filter: state.filter,
        notifications: read,
      };
    case NotificationActionType.SET_TYPE_FILTER:
      return {
        filter: action.filter,
        notifications: state.notifications,
      };
    default:
      return state;
  }
}
