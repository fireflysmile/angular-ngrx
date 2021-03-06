import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const MOCK_USER = new User();

@Injectable()
export class UserService {

  public userData: Array<User>;

  constructor(private http: HttpClient) {
    this.getData('assets/data/user.json').subscribe(data => {
      this.userData = data
    })
  }

  getData(url): Observable<any>{
    return this.http.get(url).pipe(map(res => res))
  }

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

    for (let i=0; i < this.userData.length; i++){
      if (user === this.userData[i].userName && password === this.userData[i].password) {

        MOCK_USER.userName = this.userData[i].userName;
        MOCK_USER.password = this.userData[i].password;

        return observableOf(MOCK_USER);
      }
    }

    return throwError(new Error("Invalid email or password"));
  }
}
