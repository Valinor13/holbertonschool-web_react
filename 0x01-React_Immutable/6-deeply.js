import { Map } from 'immutable';

// mergeDeeplyElements - accepts two objects and returns the deeply merged Map
// @page1: First object to merge
// @page2: Second object to merge
// @return: deeply merged Map
export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(page2);
}
