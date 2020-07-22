
export class Question {
    constructor(result: any) {
      this.id = result.id;
      this.url = result.headng;
      this.data = result.data;
      this.company = result.company;
      this.topic = result.topic;
      this.difficulty = result.difficulty;
      this.type = result.type;
    }
  
    id: number;
    url: string;
    company: string[];
    topic: string[];
    type: string;
    difficulty: string;
    data: Section[];
  }
  
  export class Section {
    constructor(res: any) {
      this.type = res.type;
      this.heading = res.heading;
      this.value = res.value;
      this.isInnerHTML = res.isInnerHTML;
      this.isString = res.isString;
      this.isEditor = res.isEditor;
  
    }
  
    type: string;
    heading: string;
    value: any;
    isInnerHTML: boolean;
    isString: boolean;
    isEditor: boolean;
  }
  
  export class Solution {
    lang: string;
    value: string;
    code: string;
  }