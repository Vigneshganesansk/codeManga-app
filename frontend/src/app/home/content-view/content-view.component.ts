import { Component, OnInit } from '@angular/core';
// import { questions } from 'src/app/common-ui/_mock-data';
// import { Question } from 'src/app/common-ui/models';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {
  showQuestion: boolean = true;
  showExplanation: boolean = true;
  showExamples: boolean = true;
  lang: string = 'C++';
  selectedQuestion: Question;
  questions: any;
  content: string;

  constructor() {
    this.questions = [
      {
        "id": "1",
        "question": "How to remove duplicate elements from the array in Java?",
        "example": "<p>[...new Set([1, 2, 3, 4])]</p>",
        "explanation": "<p>you can convert a list/array into set. This example is a trash. you can convert a list/array into set. This example is a trash.</p>",
        "solution": [
          {
            "lang": "C++",
            "code": "while (true) { console.writeline(true); }"
          },
          {
            "lang": "Java",
            "code": "while (true) { System.out.print(true); }"
          },
          {
            "lang": "Python",
            "code": "while (true) { print(true); }"
          }
        ]
      }
    ];
  }

  ngOnInit(): void {
    this.selectedQuestion = new Question(this.questions[0]);
    this.content = this.selectedQuestion.solution[1].code;
  }

  setLangCode(sol: SolutionObject) {
    this.lang = sol.lang;
    this.content = sol.code;

  }

}

export class Question {
  constructor(result: any) {
      this.id = result.id;
      this.question = result.question;
      this.explanation = result.explanation;
      this.example = result.example;
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
