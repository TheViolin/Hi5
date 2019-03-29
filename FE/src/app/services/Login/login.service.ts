import { Injectable } from '@angular/core';
import { throwError, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../ErrorHandling/error-handling.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private errorHandlingService: ErrorHandlingService) { }

  login(username: string, password: string): Observable<Object> {
    const url = this.baseUrl + `/user/login`;
    const body = {
      'username': `${username}`,
      'password': `${password}`
    };
    
    const header = {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
    };
    return this.http.post<any>(url, body, { headers: {  'Content-Type': 'application/json',  'Accept': 'application/json'} })
      .pipe(catchError((e) => this.errorHandler(e)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorHandlingService.handleError(error);
    return throwError(error);
  }

}
