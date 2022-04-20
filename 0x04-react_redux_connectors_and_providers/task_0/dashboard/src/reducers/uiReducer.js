const { Map } = require("immutable");
import { UIActionType } from "../actions/uiActionTypes";

const defaultState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export default function uiReducer(state = defaultState, action) {
  const mapState = Map(state);
  switch (action.type) {
    case UIActionType.LOGIN_SUCCESS:
      return mapState.set({
        isUserLoggedIn: true,
        user: action.user,
      });
    case UIActionType.LOGIN_FAILURE:
      return mapState.set({
        isUserLoggedIn: false,
        user: {},
      });
    case UIActionType.LOGOUT:
      return mapState.set({
        isUserLoggedIn: false,
        user: {},
      });
    case UIActionType.DISPLAY_NOTIFICATION_DRAWER:
      return mapState.set({
        isNotificationDrawerVisible: true,
      });
    case UIActionType.HIDE_NOTIFICATION_DRAWER:
      return mapState.set({
        isNotificationDrawerVisible: false,
      });
    default:
      return mapState;
  }
}
