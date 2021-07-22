/* eslint-disable @typescript-eslint/no-unused-vars */
interface DirectorInterface {
    workFromHome(): string;
    getToWork(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    static workDirectorTasks(): Function {
        throw new Error("Method not implemented.");
    }

    workFromHome(): string {
        return 'Working from home';
    }

    getToWork(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    static workTeacherTasks(): Function {
        throw new Error("Method not implemented.");
    }

    workFromHome(): string {
        return 'Cannot work from home';
    }
    
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }

    return new Director;
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): Function {
    if (employee instanceof Director) {
        return Director.workDirectorTasks();
    }
    return Teacher.workTeacherTasks();
}