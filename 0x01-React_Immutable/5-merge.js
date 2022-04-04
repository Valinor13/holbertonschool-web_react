import { Map, List } from 'immutable';

// concatElements - accepts two lists and returns the concatenated list
// @page1: First List to concatenate
// @page2: Second List to concatenate
// @return: concatenated list
export function concatElements(page1, page2) {
  return List(page1.concat(page2));
}


// mergeElements - accepts two objects and returns the merged list
// @page1: First object to merge
// @page2: Second object to merge
// @return: merged list
export function mergeElements(page1, page2) {
  return List(Map().merge(page2, page1));
}
