import { Seq } from 'immutable';

// printBestStudents - accepts an object with a key of score, and number value...
// Filters out scores < 70..
// prints to the console the remaining students with their firstName and lastName capitalized.
// @object: object with key of score, and number value
// @return: none
export default function printBestStudents(object) {
  for (let key in object) {
    if (object[key].score >= 70) {
      object[key].firstName = object[key].firstName.charAt(0).toUpperCase() + object[key].firstName.slice(1);
      object[key].lastName = object[key].lastName.charAt(0).toUpperCase() + object[key].lastName.slice(1);
    } else {
      delete object[key];
    }
  }
  console.log(Seq(object).toJS());
}
