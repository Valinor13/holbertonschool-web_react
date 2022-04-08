const { UIActionType } = require("./uiActionTypes");

export function login(email, password) {
  return {
    type: UIActionType.LOGIN,
    user: {
      email,
      password,
    },
  };
}

export function logout() {
  return {
    type: UIActionType.LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: UIActionType.DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: UIActionType.HIDE_NOTIFICATION_DRAWER,
  };
}

export const boundUIActions = () =>
  bindActionCreators(
    { login, logout, displayNotificationDrawer, hideNotificationDrawer },
    dispatch
  );
