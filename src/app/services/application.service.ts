import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root' 
})
export class ApplicationService {

  constructor(private electronService: ElectronService) { }

  addItem(item: any): Observable<any> {
    return of(
      this.electronService.ipcRenderer.sendSync('save-data', item)
    ).pipe(catchError((error: any) => Observable.throw(error.json)));
  }
  getItem(): Observable<any> {
    return of(
      this.electronService.ipcRenderer.sendSync('get-items')).pipe(
      catchError((error: any) => Observable.throw(error.json))
    );
  }
  savepdf(pdfContent: any, printFlag: boolean): Observable<any> {
    console.log('in service');
     return of(this.electronService.ipcRenderer.sendSync('save-pdf', pdfContent, printFlag)).pipe(
       catchError((error: any) => Observable.throw(error.json)))
  };
  }
