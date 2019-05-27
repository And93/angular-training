import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {UserModel} from '../models/user-model';
import {UsersAPI} from '../config/users.config';
import {UsersServicesModule} from '../users-services.module';

@Injectable({
  providedIn: UsersServicesModule
})
export class UsersService {

  constructor(
    private http: HttpClient,
    @Inject(UsersAPI) private usersUrl: string
  ) {
  }


  getUsers(): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(this.usersUrl)
      .pipe(catchError(this.handleError));
  }


  createUser(user: UserModel): Promise<UserModel> {
    return Promise.resolve(user); // TODO
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
