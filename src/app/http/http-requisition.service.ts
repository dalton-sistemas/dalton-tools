import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequisitionService {

  conference: any;
  data: Array<any> = [];

  constructor(private http: HttpClient) {
   }
  headers_send = new HttpHeaders();

  get(url: string, params?: any, headers?: any,sucess?: any, error?: any){
    return this.getObservable(url, params, headers).subscribe({next: sucess,error: error})
  }

  post(url: string, params?: any, headers?: any,sucess?: any, error?: any){
    return this.postObservable(url,params,{headers: headers}).subscribe({next: sucess, error: error});
  }
  
  getObservable(url: string, params?: any, headers?: any,sucess?: any, error?: any): Observable<any> {
    return this.http.get(url,{headers: headers}).pipe(timeout({each: 20000}));    
  }

  postObservable(url: string, params?: any, headers?: any,sucess?: any, error?: any): Observable<any> {
    return this.http.post(url,params,{headers: headers}).pipe(timeout({each: 20000}));    
  }
  

}
