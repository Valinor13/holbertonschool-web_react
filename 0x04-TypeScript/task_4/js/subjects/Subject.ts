/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Subjects {
    export class Subject {
        teacher: Teacher;
        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        // teacher.setter
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}