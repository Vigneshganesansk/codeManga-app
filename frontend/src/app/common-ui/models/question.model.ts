export class Question {
    constructor(result: any) {
        this.id = result.id;
        this.question = result.question;
        this.explanation = result.explanation;
        this.example = result.examlpe;
        this.solution = result.solution;
        this.errorText = 'No Solutions available...';
    }

    id: number;
    question: string;
    explanation: string;
    example: string;
    solution: SolutionObject[];
    errorText: string;
}

export class SolutionObject {
    lang: string;
    code: string;
}