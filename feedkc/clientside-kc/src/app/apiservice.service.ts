import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl1 = 'https://localhost:3000/login';
const apiUrl2 = '/demo';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public client:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }


  saveRegDetails(data): Observable<any> {
    return this.client.post(apiUrl1, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  checkCred(username: String): Observable<any>  {
    const url = `${apiUrl1}/${username}`;
    console.log(url);
    return this.client.get(url, httpOptions)
      .pipe(map(res=>console.log(res)),
        catchError(this.handleError)
      );
  }
}
