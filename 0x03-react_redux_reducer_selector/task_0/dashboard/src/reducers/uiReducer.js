const UIActionType = require('../actions/uiActionTypes');

const isNotificationDrawerVisible = false;
const isUserLoggedIn = false;
const user = {};

export function uiReducer(
  state = { isNotificationDrawerVisible, isUserLoggedIn, user },
  action
) {
  switch (action.type) {
    case UIActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.user,
      };
    case UIActionType.LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    case UIActionType.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    case UIActionType.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case UIActionType.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    default:
      return state;
  }
}
