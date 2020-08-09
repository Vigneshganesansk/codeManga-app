import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AnimateModule } from './animate/animate.module';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    HomeModule,

    // app
    AppRoutingModule,
    AnimateModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
