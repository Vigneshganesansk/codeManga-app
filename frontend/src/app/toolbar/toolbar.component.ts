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


scroll: boolean = false;
scrollValue:Number;
currentActive: String;
constructor(private breakpointObserver: BreakpointObserver, private toolbarService: ToolbarService, private el: ElementRef) {
  this.toolbarService.currrentActiveTabObserver.subscribe((response)=>{
      this.currentActive = response;
    }) 
  }

  ngOnInit() {
    this.toolbarService.isScrollingObserver.subscribe((response)=>{
      this.scroll = response;
    })
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
