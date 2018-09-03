import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { User } from '../models/user';

export const MOCK_USER = new User();
MOCK_USER.userName = "12345";
MOCK_USER.password = "12345";

@Injectable()
export class UserService {
  // constructor() {}

  /**
   * Authenticate the user
   *
   * @param {string} email The user's email address
   * @param {string} password The user's password
   * @returns {Observable<User>} The authenticated user observable.
   */
  public authenticate(user: string, password: string): Observable<User> {
    // Normally you would do an HTTP request to determine to
    // attempt authenticating the user using the supplied credentials.

    if (user === MOCK_USER.userName && password === MOCK_USER.password) {
      // this._authenticated = true;
      return observableOf(MOCK_USER);
    }

    return throwError(new Error("Invalid email or password"));
  }
}
