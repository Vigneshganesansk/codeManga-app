import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  num: number = 0;
  newNum: number = 78;
  isOpen: boolean;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 1,
    decimalPlaces: 0,
  };
  

  constructor() { }

  ngOnInit(): void {
  }
  openCategoryCard(){
    this.isOpen = true;;
  }
  closeCategoryCard(){
    this.isOpen = false;
  }

}
