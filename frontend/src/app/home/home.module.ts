import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesCardComponent } from './features-card/features-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryComponent } from './category/category.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentViewComponent } from './content-view/content-view.component';

import 'brace';
import 'brace/mode/text';
import 'brace/mode/html';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/theme/github';
import 'brace/theme/clouds';
import 'brace/theme/monokai';
import { AceModule } from 'ngx-ace-wrapper';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesCardComponent,
    CategoryComponent,
    CategoryCardComponent,
    ContentCardComponent,
    ContentViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    AceModule
  ],
  exports: [
    HomeComponent,
    FeaturesCardComponent
  ]
})
export class HomeModule { }
