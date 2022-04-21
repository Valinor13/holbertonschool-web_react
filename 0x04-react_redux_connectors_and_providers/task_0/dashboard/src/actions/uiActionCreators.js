import { UIActionType } from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: UIActionType.LOGIN,
    user: {
      email,
      password,
    },
  };
};

export const logout = () => {
  return {
    type: UIActionType.LOGOUT,
  };
};

export const loginSuccess = () => {
  return {
    type: UIActionType.LOGIN_SUCCESS,
  };
};

export const logoutSuccess = () => {
  return {
    type: UIActionType.LOGOUT_SUCCESS,
  };
};

// fetch API /login-succes.json on success dispatch loginSuccess() on failure dispatch loginFailure()
export const loginRequest = (email, password) => {
  dispatch(login(email, password));
  return fetch('/login-success.json')
    .then((response) => response.json())
    .then((json) => {
      if (json.success) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    });
};

export const displayNotificationDrawer = () => {
  return {
    type: UIActionType.DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: UIActionType.HIDE_NOTIFICATION_DRAWER,
  };
};

export const boundUIActions = () =>
  bindActionCreators(
    { login, logout, displayNotificationDrawer, hideNotificationDrawer },
    dispatch
  );
