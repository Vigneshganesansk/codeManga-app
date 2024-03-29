import {
    Directive,
    ElementRef,
    Input,
    Output,
    HostListener,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    NgZone, Inject, PLATFORM_ID, OnInit
  } from '@angular/core';
  import { CountUp, CountUpOptions } from 'countup.js';
import { isPlatformBrowser } from '@angular/common';
  
  @Directive({
    selector: '[countUp]'
  })

  export class CountUpDirective implements OnChanges,OnInit {
  
    countUp: CountUp;
    // the value you want to count to
    @Input('countUp') endVal: number;
    // previous end val enables us to count from last endVal
    // when endVal is changed
    previousEndVal: number;
  
    @Input() options: CountUpOptions = {};
    @Input() reanimateOnClick = true;
    @Input() animation = true;
    @Output() complete = new EventEmitter<void>();
  
    // Re-animate if preference is set.
    @HostListener('click')
    onClick() {
      if (this.reanimateOnClick) {
        this.animate();
      }
    }
  
    constructor(
      private el: ElementRef,
      private zone: NgZone,
      @Inject(PLATFORM_ID) private platformId: Object,
    ) {}

    ngOnInit(){
        if(this.animation == true){
            this.animate();
        }
    }
  
    ngOnChanges(changes: SimpleChanges) {
      // don't animate server-side (universal)
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      if (changes.endVal && changes.endVal.currentValue !== undefined) {
        if (this.previousEndVal !== undefined) {
          this.options = {
            ...this.options,
            startVal: this.previousEndVal
          };
        }
        this.countUp = new CountUp(this.el.nativeElement, this.endVal, this.options);
        this.animate();
        this.previousEndVal = this.endVal;
      }
    }
  
    private animate() {
      this.zone.runOutsideAngular(() => {
        this.countUp.reset();
        this.countUp.start(() => {
          this.zone.run(() => {
            this.complete.emit();
          });
        });
      });
    }
  }