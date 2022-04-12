const { Map } = require("immutable");
const UIActionType = require("../actions/uiActionTypes");

export const defaultState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case UIActionType.LOGIN_SUCCESS:
      return Map().set({
        ...state,
        isUserLoggedIn: true,
        user: action.user,
      });
    case UIActionType.LOGIN_FAILURE:
      return Map().set({
        ...state,
        isUserLoggedIn: false,
        user: {},
      });
    case UIActionType.LOGOUT:
      return Map().set({
        ...state,
        isUserLoggedIn: false,
        user: {},
      });
    case UIActionType.DISPLAY_NOTIFICATION_DRAWER:
      return Map().set({
        ...state,
        isNotificationDrawerVisible: true,
      });
    case UIActionType.HIDE_NOTIFICATION_DRAWER:
      return Map().set({
        ...state,
        isNotificationDrawerVisible: false,
      });
    default:
      return Map().set(state);
  }
}
