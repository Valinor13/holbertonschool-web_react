import { Map } from "immutable";

export function filterTypeSelected(state) {
  return state.filter;
}

export function getNotifications(state) {
  return Map(state.notifications);
}

export function getUnreadNotifications(state) {
  return getNotifications(state).filter(notification => !notification.read);
}
