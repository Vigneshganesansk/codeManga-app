import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { ToolbarService } from '../../core/services/toolbar/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {
  @ViewChild('link0') link0Element: ElementRef;
  @ViewChild('link1') link1Element: ElementRef;
  @ViewChild('link2') link2Element: ElementRef;
  // @ViewChild('link3') link3Element: ElementRef;
  // @ViewChild('link4') link4Element: ElementRef;

  public currentActive = 0;
  public topOffset: number = null;
  public homeOffset: number = null;
  public conOffset: number = null;
  // public newOffset: Number = null;
  // public aboutOffset: Number = null;
  constructor(private toolbarService: ToolbarService, private viewportScroller: ViewportScroller) { 
    this.toolbarService.scrollToSelectedTab.subscribe(response => {
      this.scroll(response);
    })
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.topOffset = this.link0Element.nativeElement.offsetTop;
    this.homeOffset = this.link1Element.nativeElement.offsetTop;
    this.conOffset = this.link2Element.nativeElement.offsetTop;
    // this.newOffset = this.link3Element.nativeElement.offsetTop;
    // this.aboutOffset = this.link4Element.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
  if (window.pageYOffset + 100 >= this.topOffset && window.pageYOffset + 100 < this.homeOffset) {
      this.toolbarService.setSelectedTab(0); 
    } else if (window.pageYOffset + 100 >= this.homeOffset && window.pageYOffset + 100 < this.conOffset) {
      this.toolbarService.setSelectedTab(1); 
    } else if (window.pageYOffset + 100 >= this.conOffset) {
      this.toolbarService.setSelectedTab(2); 
    }
  } 
  scroll(el: String) {
    if(el === "link0"){
      this.link0Element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if(el === "link1"){
      this.link1Element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (el === "link2"){
      this.link2Element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
