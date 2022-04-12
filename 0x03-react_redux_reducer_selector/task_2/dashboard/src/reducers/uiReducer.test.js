import { uiReducer } from "./uiReducer";

describe("Test suite for uiReducer", () => {
  it(`test verifying the state returned by the uiReducer function equals
  the default state when no action is passed`, () => {
    const defaultState = {
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    };
    expect(uiReducer(undefined, {}).toJS()).toEqual(defaultState);
  });

  it(`test verifying the state returned by the uiReducer function equals 
  the initial state when the action SELECT_COURSE is passed`, () => {
    const initialState = {
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    };
    const action = {
      type: "SELECT_COURSE",
      index: 0,
    };
    expect(uiReducer(initialState, action).toJS()).toEqual(initialState);
  });

  it(`test verifying the state returned by the uiReducer function, 
  when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes 
  correctly the isNotificationDrawerVisible property`, () => {
    const initialState = {
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    };
    const action = {
      type: "DISPLAY_NOTIFICATION_DRAWER",
    };
    expect(uiReducer(initialState, action).toJS()).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
