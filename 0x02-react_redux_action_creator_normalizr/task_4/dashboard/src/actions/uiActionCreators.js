const { UIActions } = require("./uiActionTypes");

function login(email, password) {
  return {
    type: UIActions.LOGIN,
    user: {
      email,
      password,
    }
  };
}

function logout() {
  return {
    type: UIActions.LOGOUT,
  };
}

function displayNotificationDrawer() {
  return {
    type: UIActions.DISPLAY_NOTIFICATION_DRAWER,
  };
}

function hideNotificationDrawer() {
  return {
    type: UIActions.HIDE_NOTIFICATION_DRAWER,
  };
}

module.exports = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
}
