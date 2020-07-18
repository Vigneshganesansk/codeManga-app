import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { ContentCardComponent } from './content/content-card/content-card.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { EditorViewComponent } from './editor-view/editor-view.component';
import { ContentRoutingModule } from './content-routing.module';



@NgModule({
  declarations: [ContentComponent, ContentCardComponent, FilterSectionComponent, EditorViewComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
