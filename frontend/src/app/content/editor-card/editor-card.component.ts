import { Component, OnInit, Input, ViewEncapsulation, PipeTransform, Pipe } from '@angular/core';
import { Solution, Section } from 'src/app/core/models/question.model';

@Component({
  selector: 'app-editor-card',
  templateUrl: './editor-card.component.html',
  styleUrls: ['./editor-card.component.css']
})

export class EditorCardComponent implements OnInit {
  @Input() company: string[] = [];
  @Input() topic: string[] = [];
  @Input() question: Section;
  showBody: boolean = true;
  selectedSol: Solution = new Solution();

  constructor() {
  }

  ngOnInit(): void {
    if (this.question.isEditor) {
      this.selectedSol.value = this.question.value[0].value;
      this.selectedSol.code = this.question.value[0].code;
      this.selectedSol.lang = this.question.value[0].lang;
    }
  }

  setLangCode(sol: Solution) {
    this.selectedSol = sol;
  }
}
