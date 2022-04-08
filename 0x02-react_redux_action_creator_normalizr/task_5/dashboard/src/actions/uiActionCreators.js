const { UIActionType } = require("./uiActionTypes");

function login(email, password) {
  return {
    type: UIActionType.LOGIN,
    user: {
      email,
      password,
    }
  };
}

function logout() {
  return {
    type: UIActionType.LOGOUT,
  };
}

function displayNotificationDrawer() {
  return {
    type: UIActionType.DISPLAY_NOTIFICATION_DRAWER,
  };
}

function hideNotificationDrawer() {
  return {
    type: UIActionType.HIDE_NOTIFICATION_DRAWER,
  };
}

module.exports = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
}
