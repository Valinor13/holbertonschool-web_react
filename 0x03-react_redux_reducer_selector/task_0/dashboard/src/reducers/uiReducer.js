import { UIActionType } from "../actions/uiActionTypes";

const defaultState = {
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
  user: {},
};

export default function uiReducer(state = defaultState, action) {
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
