import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { EditorViewComponent } from './editor-view/editor-view.component';
import { ContentRoutingModule } from './content-routing.module';

import 'brace';
import 'brace/mode/text';
import 'brace/mode/html';
import 'brace/mode/java';
import 'brace/mode/c_cpp';
import 'brace/mode/python';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/theme/github';
import 'brace/theme/clouds';
import 'brace/theme/monokai';
import { AceModule } from 'ngx-ace-wrapper';
import { EditorCardComponent } from './editor-card/editor-card.component';
import { SharedModule } from '../shared/shared.module';
import { AnimateModule } from '../animate/animate.module';



@NgModule({
  declarations: [
    ContentComponent, 
    ContentCardComponent, 
    FilterSectionComponent, 
    EditorViewComponent,
    EditorCardComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    AceModule,
    SharedModule,
    AnimateModule
  ]
})
export class ContentModule { }
