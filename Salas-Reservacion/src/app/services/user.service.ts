import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Context } from '../../context';

import { LoginRequest } from './models/request/LoginRequest.model';
import { BasicResponse } from './models/response/BasicResponse.model';
import { LoginResponse } from './models/response/LoginResponse.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

//   getCountrysCode(): Observable<CountryByCodeResponse> {
//     const headerOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json; charset=UTF-8'
//       })
//     };
//     return this.http
//       .get<CountryByCodeResponse>(this.globals.externalServiceURL +/Core/CountrysByCode, headerOptions)
//       .pipe(catchError(this.handleError.bind(this)));
//   }

  Login(request: LoginRequest): Observable<LoginResponse> {
    const body = JSON.stringify(request);
    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };
    return this.http
      .post<LoginResponse>(Context.urlBase + "/login", body, headerOptions);
  }
  
}