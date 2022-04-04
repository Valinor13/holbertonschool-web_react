import { seq } from 'immutable';

// printBestStudents - accepts an object with a key of score, and number value. Filters out scores < 70
// @object: object with key of score, and number value
// @return: Seq of objects with key of score, and number value greater than 69
export default function printBestStudents(object) {
  return seq(object).filter((item) => {
    return item.get('score') > 69;
  });
}
