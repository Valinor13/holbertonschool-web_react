import { getIn } from 'immutable';

// access object and return value at path definded by array
export default function accessImmutableObject(object, array) {
  return getIn(object, array);
}
