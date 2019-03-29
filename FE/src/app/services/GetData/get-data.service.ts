
import { Injectable } from '@angular/core';
import { throwError, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../ErrorHandling/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private errorHandlingService: ErrorHandlingService) { }

  getCharge(token: string): Observable<Object> {
    const url = this.baseUrl + `/`;
    
    const header = {
      headers: new HttpHeaders
        ({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Token': `${token}`
        })
    };
    return this.http.get<any>(url, header)
      .pipe(catchError((e) => this.errorHandler(e)));
  }
  
  private errorHandler(error: HttpErrorResponse) {
    this.errorHandlingService.handleError(error);
    return throwError(error);
  }
}
