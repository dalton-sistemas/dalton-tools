import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequisitionService {

  conference: any;
  data: Array<any> = [];

  baseUrl1:String = "http://s01w22jobdes01:8080/desenv-tuper/resources"; //Tomcat
  baseUrl2:String = "http://s01w22jobdes01:8290/desenv-tuper/resources"; //Spring-Boot

  constructor(private http: HttpClient) {
   }
  headers_send = new HttpHeaders();

  get(url: any,instanceUrl: string, params?: any, headers?: any, timeout?:any, sucess?: any, error?: any){
    if(url === 1){
      return this.getObservable(this.baseUrl1 + instanceUrl, params, headers,timeout).subscribe({next: sucess,error: error})
    }else{
      return this.getObservable(this.baseUrl2 + instanceUrl, params, headers,timeout).subscribe({next: sucess,error: error})
    }
  }

  post(url: any,instanceUrl: string, params?: any, headers?: any, timeout?:any, sucess?: any, error?: any){    
    if(url === 1){
      return this.postObservable(this.baseUrl1 + instanceUrl,params,{headers: headers},timeout).subscribe({next: sucess, error: error});
    }else{
      return this.postObservable(this.baseUrl2 + instanceUrl,params,{headers: headers},timeout).subscribe({next: sucess, error: error});
    }
  }
  
  getObservable(url: string, params?: any, headers?: any, timeoutValue?:any,sucess?: any, error?: any): Observable<any> {
    return this.http.get(url,params).pipe(timeout({each: timeoutValue}));    
  }

  postObservable(url: string, params?: any, headers?: any, timeoutValue?:any, sucess?: any, error?: any): Observable<any> {
    return this.http.post(url,params,{headers: headers}).pipe(timeout({each: timeoutValue}));    
  }
  

}
