import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './http-interceptors';
import { AppErrorHandler } from './error-handler/app-error-handler.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
})
export class CoreModule { 
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
