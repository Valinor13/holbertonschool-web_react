import { List } from 'immutable';

// Create immutable list with array
export function getListObject(array) {
  return List(array);
}

// Add string to immutable List
export function addElementToList(list, element) {
  return list.push(element);
}
