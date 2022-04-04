import { is } from 'immutable';

// areMapsEqual - accepts two Map objects and returns true if they are equal
// @map1: First Map object to compare
// @map2: Second Map object to compare
// @return: true if the two Map objects are equal, false otherwise
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
