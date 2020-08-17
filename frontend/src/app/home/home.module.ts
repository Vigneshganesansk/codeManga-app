import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesCardComponent } from './features-card/features-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryComponent } from './category/category.component';
import { CategoryCardComponent } from './category/category-card/category-card.component';
import { AnimateModule } from '../animate/animate.module';


@NgModule({
  declarations: [HomeComponent, FeaturesCardComponent, CategoryComponent, CategoryCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    AnimateModule,
  ],
  exports: [
    HomeComponent,
    FeaturesCardComponent
  ]
})
export class HomeModule { }
