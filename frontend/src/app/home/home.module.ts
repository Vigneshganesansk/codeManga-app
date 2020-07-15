import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesCardComponent } from './features-card/features-card.component';



@NgModule({
  declarations: [HomeComponent, FeaturesCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    FeaturesCardComponent
  ]
})
export class HomeModule { }
