import { Map } from 'immutable';

// export Map object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// export another map object
export const map2 = map.withMutations((map) => {
  map.set(2, 'Benjamin').set(4, 'Oliver');
});
