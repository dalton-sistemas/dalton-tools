import { Injectable } from '@angular/core';
import { HttpEvent, 
         HttpInterceptor, 
         HttpHandler, 
         HttpRequest
 } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

 export class Interceptor implements HttpInterceptor {
   intercept( request: HttpRequest<any>, next: HttpHandler ): 
   Observable<HttpEvent<any>> {
     console.log(request);
     request = request.clone({
       headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('dalton.c:Barcadell@123'),
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-With',
        'returnFormatVersion': '2',
      })
    });
  return next.handle(request);
 }
}

