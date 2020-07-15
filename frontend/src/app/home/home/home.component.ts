import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { ToolbarService } from '../../core/services/toolbar/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  currentSection = 'link0';



  constructor(private toolbarService: ToolbarService,private _router: Router, private _route: ActivatedRoute, private _location: Location) { 
    this.toolbarService.scrollToSelectedTab.subscribe((response) => {
      this.scrollTo(response);
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.currentSection = params['sectionId'];
      this.scrollTo(this.currentSection);
    });
  }

  onSectionChange(sectionId: string) {
    this._location.go(sectionId);
    this.currentSection = sectionId;
    this.toolbarService.setSelectedTab(this.currentSection);
}

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView({
        behavior: 'smooth'
      });
  }

}
