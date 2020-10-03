import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content = {
    'dynamicProgramming':{
      'basic':['QuestionB1','QuestionB2'],
      'intermediate':['QuestionI1','QuestionI2'],
      'hard':['QuestionH1','QuestionH2']
    }
  };
  index: number = 1;
  categoryArr = ['basic','intermediate','hard'];
  category: string = this.categoryArr[this.index-1];
  animationType: string = 'landing';
  constructor() { }
  questions=this.content.dynamicProgramming[this.category];
  ngOnInit(): void {
  }
  next(){
    this.index = this.index + 1;
    if(this.index > this.categoryArr.length)
    {
      this.index%=this.categoryArr.length;
    }
    this.category = this.categoryArr[this.index-1];
    this.questions = this.content.dynamicProgramming[this.category];
    this.animationType = 'fadeInRight'
  }
  prev(){
    this.index = this.index - 1;
    if(this.index == 0)
    {
      this.index = this.categoryArr.length;
    }
    this.category = this.categoryArr[this.index-1];
    this.questions = this.content.dynamicProgramming[this.category];
    this.animationType = 'fadeInLeft'
  }

}

