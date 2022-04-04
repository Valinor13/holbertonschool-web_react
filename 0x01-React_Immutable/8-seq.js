import { Seq } from 'immutable';

// printBestStudents - accepts an object with a key of score, and number value...
// Filters out scores < 70..
// prints to the console the remaining students with their firstName and lastName capitalized.
// @object: object with key of score, and number value
// @return: none
export default function printBestStudents(object) {
  const students = Seq(object).filter((student) => student.get('score') >= 70);
  students.forEach((student) => {
    console.log(`${student.get('firstName').toUpperCase()} ${student.get('lastName').toUpperCase()}`);
  });
}
