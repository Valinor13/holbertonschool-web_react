import { NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe('Test suite for notificationActionCreators.js', () => {
  it('markAsRead should return an action', () => {
    const index = 1;
    const action = markAsRead(index);
    expect(action).toEqual({
      type: 'MARK_AS_READ',
      index
    });
  });

  it('setNotificationFilter should return an action', () => {
    const filter = NotificationTypeFilters.URGENT;
    const action = setNotificationFilter(filter);
    expect(action).toEqual({
      type: 'SET_TYPE_FILTER',
      filter
    });
  });
});
