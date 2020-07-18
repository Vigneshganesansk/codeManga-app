import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
import { ToolbarService } from '../services/toolbar/toolbar.service';

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string;

    constructor(private _el: ElementRef, private toolbarService: ToolbarService) {
    }

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        let currentSection: string;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        if(scrollTop > 184)
        {
            this.toolbarService.setIsScrollingNext(true);
        }else {
            this.toolbarService.setIsScrollingNext(false);
        }
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }

}
