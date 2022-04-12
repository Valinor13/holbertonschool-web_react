const { Map } = require("immutable");
const UIActionType = require("../actions/uiActionTypes");

export const state = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export function uiReducer(state = state, action) {
  Map(state);
  switch (action.type) {
    case UIActionType.LOGIN_SUCCESS:
      return set({
        ...state,
        isUserLoggedIn: true,
        user: action.user,
      });
    case UIActionType.LOGIN_FAILURE:
      return set({
        ...state,
        isUserLoggedIn: false,
        user: {},
      });
    case UIActionType.LOGOUT:
      return set({
        ...state,
        isUserLoggedIn: false,
        user: {},
      });
    case UIActionType.DISPLAY_NOTIFICATION_DRAWER:
      return set({
        ...state,
        isNotificationDrawerVisible: true,
      });
    case UIActionType.HIDE_NOTIFICATION_DRAWER:
      return set({
        ...state,
        isNotificationDrawerVisible: false,
      });
    default:
      return set(state);
  }
}
