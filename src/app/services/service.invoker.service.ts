import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import { catchError, retry, map} from 'rxjs/operators';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ServiceInvoker {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
  getAPI(): Observable<any> {
    return this.http.get('http://localhost:3400/test', this.httpOptions)
  }
  
  public callApi(method: string,url: string,input: any,options: any){
    console.log("inside callApi")
    if(!options){
      options={
        headers: this.httpOptions,
        observe: 'body',
        responseType: 'json',
        async: false,
      }
    }
    if(options.async==undefined){
      options.async=true;
    }
    options.body=input;
    if (options.async == true) {
      return this.asyncService(method,url,options);
    }
    else {      
      return this.http.request(method,url,options).subscribe((data)=>{
return data
      })
        // .pipe(
        //   map((res) => {
        //   return res;
        // }),
        // retry(options.retry|0),
        //   catchError(this.handleError)
        // )
    }
  }

  async asyncService(method,url,options) {
    return await this.http.request(method,url,options)
      .pipe(map((res) => {
        return res
      }), catchError(this.handleError)).toPromise()
  }

  handleError(error: HttpErrorResponse) {
	  swal.fire({
		  type: 'error',
		  title: 'Oops...',
		  text: 'Server Not Found,Please try again!!',
		  });
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  public getRequest(url,input,options){
    
    
    return this.callApi("GET", url,input,options);
  }
  public postRequest(url,input,options){
    return this.callApi("POST", url,input,options);
  }
  public putRequest(url,input,options){
    return this.callApi("PUT", url,input,options);
  }  
  public deleteRequest(url,input,options){
    return this.callApi("DELETE", url,input,options);
  }
}