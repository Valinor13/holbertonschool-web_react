const { Map } = require("immutable");
import { UIActionType } from "../actions/uiActionTypes";

export const defaultState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export default function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case UIActionType.LOGIN_SUCCESS:
      return state.set({
        ...state,
        isUserLoggedIn: true,
        user: action.user,
      });
    case UIActionType.LOGIN_FAILURE:
      return state.set({
        ...state,
        isUserLoggedIn: false,
        user: {},
      });
    case UIActionType.LOGOUT:
      return state.set({
        ...state,
        isUserLoggedIn: false,
        user: {},
      });
    case UIActionType.DISPLAY_NOTIFICATION_DRAWER:
      return state.set({
        ...state,
        isNotificationDrawerVisible: true,
      });
    case UIActionType.HIDE_NOTIFICATION_DRAWER:
      return state.set({
        ...state,
        isNotificationDrawerVisible: false,
      });
    default:
      return state;
  }
}
