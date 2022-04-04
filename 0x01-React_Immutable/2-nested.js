import { Map } from 'immutable';

// access object and return value at path definded by array
export default function accessImmutableObject(object, array) {
  const map = Map(object);
  return map.getIn(array, undefined);
}
