import { UIActionType } from "./uiActionTypes";

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

export function loginSuccess() {
  return {
    type: UIActionType.LOGIN_SUCCESS,
  };
}

export function logoutSuccess() {
  return {
    type: UIActionType.LOGOUT_SUCCESS,
  };
}

// fetch API /login-succes.json on success dispatch loginSuccess() on failure dispatch loginFailure()
export function loginRequest(email, password) {
  dispatch(login(email, password));
  return fetch("/login-success.json")
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    });
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
