import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('Test suite for uiActionCreators.js', () => {
  it('login() should return an object with type UIActions.LOGIN and user matching expected', () => {
    const email = 'test@test.com';
    const password = 'test';
    const expected = {
      type: 'LOGIN',
      user: {
        email,
        password,
      }
    };
    expect(login(email, password)).toEqual(expected);
  });

  it('logout() should return an object with type UIActions.LOGOUT', () => {
    const expected = {
      type: 'LOGOUT',
    };
    expect(logout()).toEqual(expected);
  });

  it('displayNotificationDrawer() should return an object with type UIActions.DISPLAY_NOTIFICATION_DRAWER', () => {
    const expected = {
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    };
    expect(displayNotificationDrawer()).toEqual(expected);
  });

  it('hideNotificationDrawer() should return an object with type UIActions.HIDE_NOTIFICATION_DRAWER', () => {
    const expected = {
      type: 'HIDE_NOTIFICATION_DRAWER',
    };
    expect(hideNotificationDrawer()).toEqual(expected);
  });
});
