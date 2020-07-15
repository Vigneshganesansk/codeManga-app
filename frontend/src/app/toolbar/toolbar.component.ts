import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, HostListener} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ToolbarService } from '../core/services/toolbar/toolbar.service';




@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


scroll:boolean=false;
currentActive: Number;
constructor(private breakpointObserver: BreakpointObserver, private toolbarService: ToolbarService) {
  this.toolbarService.currrentActiveTabObserver.subscribe((response)=>{
      this.currentActive = response;
    }) 
  }

  ngOnInit() {
      window.addEventListener('scroll', this.scrolling, true);
  }
  scrolling=(s)=>{
    let sc = s.target.scrollingElement.scrollTop;
    if(sc >=100){this.scroll=true}
    else{this.scroll=false}
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  scrollToElement(link: String){
      this.toolbarService.setClickedTab(link);
  }

}
