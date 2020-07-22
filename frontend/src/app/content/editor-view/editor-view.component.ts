import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-view',
  templateUrl: './editor-view.component.html',
  styleUrls: ['./editor-view.component.css']
})
export class EditorViewComponent implements OnInit {
  questions: any;

  constructor() {
    this.questions = [
      {
        "id": 1,
        "url": "write-a-program-to-reverse-an-array",
        "company": ["Google", "Facebook", "Amazon", "DBS"],
        "topic": ["Arrays", "loops"],
        "type": "full-length",
        "difficulty": "easy",
        "data": [
          {
            "type": "question",
            "heading": "Reverse an array",
            "value": "Write a program to reverse an array or string",
            "isString": true,
            "isInnerHTML": false,
            "isEditor": false
          },
          {
            "type": "example",
            "heading": "Examples",
            "value": "<div style=\"background: lightgray;\"><pre style=\"margin-botton: 5px 10px;\">Input  : arr[] = {1, 2, 3} </br>Output : arr[] = {3, 2, 1}  </br>Input :  arr[] = {4, 5, 1, 2} </br>Output : arr[] = {2, 1, 5, 4} </pre></div>",
            "isString": false,
            "isInnerHTML": true,
            "isEditor": false
          },
          {
            "type": "explanation",
            "heading": "Explanation",
            "value": "<p>Input  : arr[] = {1, 2, 3} Output : arr[] = {3, 2, 1} Input :  arr[] = {4, 5, 1, 2} Output : arr[] = {2, 1, 5, 4} </p>",
            "isString": false,
            "isInnerHTML": true,
            "isEditor": false
          },
          {
            "type": "code",
            "heading": "Optimal Code",
            "value": [
              {
                "lang": "C++",
                "value": "c_cpp",
                "code": "while (true) {\n\tconsole.writeline(true);\n}"
              },
              {
                "lang": "Java",
                "value": "java",
                "code": "while (true) {\n\tSystem.out.print(true);\n}"
              },
              {
                "lang": "Python",
                "value": "python",
                "code": "while (true)\n\tprint(true)"
              }
            ],
            "isString": false,
            "isInnerHTML": false,
            "isEditor": true
          },
          {
            "type": "explanation",
            "heading": "Explanation",
            "value": "<p>Input  : arr[] = {1, 2, 3} Output : arr[] = {3, 2, 1} Input :  arr[] = {4, 5, 1, 2} Output : arr[] = {2, 1, 5, 4} </p>",
            "isString": false,
            "isInnerHTML": true,
            "isEditor": false
          },
          {
            "type": "code",
            "heading": "Optimal Code",
            "value": [
              {
                "lang": "C++",
                "value": "c_cpp",
                "code": "while (true) {\n\tconsole.writeline(true);\n}"
              },
              {
                "lang": "Java",
                "value": "java",
                "code": "while (true) {\n\tSystem.out.print(true);\n}"
              },
              {
                "lang": "Python",
                "value": "python",
                "code": "while (true)\n\tprint(true)"
              }
            ],
            "isString": false,
            "isInnerHTML": false,
            "isEditor": true
          }
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

}
