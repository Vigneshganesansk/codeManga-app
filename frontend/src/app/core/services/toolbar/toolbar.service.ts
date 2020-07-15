import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }
  private currentActiveTab = new BehaviorSubject<String>('link0'); 
  private selectedTab = new Subject<String>();
  currrentActiveTabObserver = this.currentActiveTab.asObservable();
  setSelectedTab(link: String)
  {
      this.currentActiveTab.next(link);
  }
  scrollToSelectedTab = this.selectedTab.asObservable();
  setClickedTab(el: String)
  {
    this.selectedTab.next(el);
  }
  private isScrolling = new BehaviorSubject<boolean>(false);
  isScrollingObserver = this.isScrolling.asObservable();
  setIsScrollingNext(scroll: boolean)
  {
    this.isScrolling.next(scroll);
  }

}
