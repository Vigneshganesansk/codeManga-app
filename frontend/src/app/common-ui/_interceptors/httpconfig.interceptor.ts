// import { Injectable } from '@angular/core';
// import {
//     HttpInterceptor,
//     HttpRequest,
//     HttpResponse,
//     HttpHandler,
//     HttpEvent
// } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
// import { environment } from '../../environments/environment';
// import { MockData } from './_mock-data';

// @Injectable()
// export class HttpConfigInterceptor implements HttpInterceptor {
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const mockData = new MockData();
//         const urls = [
//             {
//                 url: environment.authLogin,
//                 json: { "token" : "success" }
//             },
//             {
//                 url: environment.authRegister,
//                 json: { "token" : "success" }
//             },
//             {
//                 url: environment.newsTopheadlines,
//                 json: mockData.NewsData
//             },
//             {
//                 url: environment.newsCategory,
//                 json: mockData.NewsData
//             },
//             {
//                 url: environment.newsFav,
//                 json: mockData.NewsData
//             }
//         ];

//         const result = urls.find(ur => ur.url === request.url || request.url.includes(ur.url));
//         if (result) {
//             const something = new HttpResponse({ status: 200, body: result.json });
//             const somethingelse = of(something)
//             return somethingelse;
//         }
//         return next.handle(request);
//     }
// }
