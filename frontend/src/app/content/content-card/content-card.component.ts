import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() animationType: string;
  @Input() question: string;

  constructor() { }

  ngOnInit(): void {
  }

}
