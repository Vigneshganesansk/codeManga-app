import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//import { environment } from '@env/environment';
import { NotificationsService } from '../notifications/notifications.service';

/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
@Injectable({
  providedIn: 'root'
})
export class AppErrorHandler extends ErrorHandler {
  constructor(private notificationsService: NotificationsService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    this.notificationsService.success(error.message);
    super.handleError(error);
  }
}
