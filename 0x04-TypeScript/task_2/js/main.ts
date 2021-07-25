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

export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }

    return new Director;
}

export function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): Function {
    if (employee instanceof Director) {
        return Director.workDirectorTasks();
    }
    return Teacher.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: 'Math' | 'History'): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}