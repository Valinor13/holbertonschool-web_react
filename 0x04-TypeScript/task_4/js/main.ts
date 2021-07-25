import Cpp from "./subjects/Cpp";
import Java from "./subjects/Java";
import React from "./subjects/React";
import Teacher from "./subjects/Teacher";

export const cpp: Cpp = {
    firstName: 'Jackie',
    lastName: 'Chan',
}

export const java: Java = {
    firstName: 'Bruce',
    lastName: 'Lee',
}

export const react: React = {
    firstName: 'Clint',
    lastName: 'Eastwood',
}

export const cTeacher: Teacher = {
    firstName: 'Coach',
    lastName: 'Pain',
    experienceTeachingC: 10,
}

console.log(`C++ ${cTeacher} ${cpp.getRequirements()} ${cpp.getAvailableTeacher}`);
console.log(`Java ${cTeacher} ${java.getRequirements()} ${java.getAvailableTeacher}`);
console.log(`React ${cTeacher} ${react.getRequirements()} ${react.getAvailableTeacher}`);
