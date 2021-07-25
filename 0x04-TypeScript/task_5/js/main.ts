enum  majorCredits {}
type MajorCredits = majorCredits & {
    credits: number;
}

enum minorCredits {}
type MinorCredits = minorCredits & {
    credits: number;
}

const subject1: MajorCredits = {
    credits: 10
}

const subject2: MajorCredits = {
    credits: 12
}

subject1: MinorCredits = {
    credits: 5
}

subject2: MinorCredits = {
    credits: 3
}

export function sumMajorCredits(subject1: number, subject2: number): number {
    return subject1.MajorCredits.credits + subject2.MajorCredits.credits;
}

export function sumMinorCredits(subject1: number, subject2: number): number {
    return subject1.MinorCredits.credits + subject2.MinorCredits.credits;
}