import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../classes/user';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<User>('http://localhost:8080/credentials/login', { username, password })
        .pipe(map( (user) => {
            // login successful if there's a jwt token in the response
            if (user.id !== null || user.id !== undefined) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
