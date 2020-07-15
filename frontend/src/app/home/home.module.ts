import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesCardComponent } from './features-card/features-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryComponent } from './category/category.component';
import { CategoryCardComponent } from './category-card/category-card.component';



@NgModule({
  declarations: [HomeComponent, FeaturesCardComponent, CategoryComponent, CategoryCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
    FeaturesCardComponent
  ]
})
export class HomeModule { }
