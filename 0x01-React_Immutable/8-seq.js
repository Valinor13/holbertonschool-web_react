import { Seq } from 'immutable';

// printBestStudents - accepts an object with a key of score, and number value...
// Filters out scores < 70..
// prints to the console the remaining students with their firstName and lastName capitalized.
// @object: object with key of score, and number value
// @return: none
export default function printBestStudents(object) {
  const students = {};
  for (const key in object) {
    if (object[key].score >= 70) {
      students[key] = {
        firstName: object[key].firstName.charAt(0).toUpperCase()
          + object[key].firstName.slice(1),
        lastName: object[key].lastName.charAt(0).toUpperCase()
          + object[key].lastName.slice(1),
        score: object[key].score,
      };
    }
  }
  console.log(Seq(students).toJS());
}
