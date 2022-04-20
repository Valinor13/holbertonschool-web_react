const { Map } = require("immutable");
import { notificationNormalizer } from "../schema/notifications";
import {
  NotificationTypeFilters,
  NotificationActionType,
} from "../actions/notificationActionTypes";

const defaultState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

export default function notificationReducer(state = defaultState, action) {
  switch (action.type) {
    case NotificationActionType.FETCH_NOTIFICATIONS_SUCCESS:
      // const success = action.data.map((notification) => {
      //   return {
      //     ...notification,
      //     isRead: false,
      //   };
      // });
      // return {
      //   filter: state.filter,
      //   notifications: success,
      // };
      return state.merge(notificationNormalizer(action.data));
    case NotificationActionType.MARK_AS_READ:
      // const read = state.notifications.map((notification) => {
      //   if (notification.id === action.index) {
      //     return {
      //       ...notification,
      //       isRead: true,
      //     };
      //   } else {
      //     return notification;
      //   }
      // });
      // return {
      //   filter: state.filter,
      //   notifications: read,
      // };
      return state.setIn([action.index, "isRead"], true);
    case NotificationActionType.SET_TYPE_FILTER:
      // return {
      //   filter: action.filter,
      //   notifications: state.notifications,
      // };
      return state.set("filter", action.filter);
    default:
      return state;
  }
}
