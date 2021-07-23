/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace Subjects {
    export class Cpp extends Subject {
        experienceTeachingC?: number;

        getRequirements(): string {
            return 'Here are the requirements for Cpp';
        }

        getAvailableTeacher(): string {
            if (this.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}