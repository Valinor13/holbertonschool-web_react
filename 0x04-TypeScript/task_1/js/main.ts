/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/class-name-casing */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: unknown; 
};

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export let printTeacher: printTeacherFunction;
printTeacher = function (firstName: string, lastName: string): string {
    return firstName.charAt(0).concat('. ', lastName);
}

interface StudentInterface {
    firstName: string;
    lastName: string;
}

export class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHOmework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}