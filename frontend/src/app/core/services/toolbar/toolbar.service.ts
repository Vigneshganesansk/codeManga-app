import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }
  private currentActiveTab = new BehaviorSubject<Number>(0); 
  private selectedTab = new Subject<String>();
  currrentActiveTabObserver = this.currentActiveTab.asObservable();
  setSelectedTab(number: Number)
  {
      this.currentActiveTab.next(number);
  }
  scrollToSelectedTab = this.selectedTab.asObservable();
  setClickedTab(el: String)
  {
    this.selectedTab.next(el);
  }

}
