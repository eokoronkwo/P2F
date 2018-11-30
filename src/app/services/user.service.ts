import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommunicationService } from './communication.service';
import { Router } from '@angular/router';
import { CalEvent } from '../classes/cal-event';
import { ChartData } from '../classes/chart-data';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
    private commService: CommunicationService,
    private router: Router) { }

  // Logs in user, sending them to the view-list page
  login(username: string, password: string) {
    const url = `http://localhost:8080/credentials/login`;
    const payload = {
      username: username,
      password: password
    };
    this.httpClient.post<User>(url, payload).subscribe( (user) => {
      this.commService.setCurrentUser(user);
      console.log(user);
    }, () => {
      this.commService.setCurrentUser(undefined);
    }, () => {});
  }

  // logout() {
  //   const url = `http://localhost:8080/ProjectReimbursement/logout`;
  //   this.httpClient.get(url, {withCredentials: true});
  //   this.commService.setCurrentUser(undefined);
  //   this.router.navigate(['/login']);
  // }

  queryCredentials(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders ({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }),
    };
   return this.httpClient.post('http://localhost:8080/credentials/check', { username: username, password: password }, httpOptions);
  }

  queryCreate(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }),
    };
   return this.httpClient.post('http://localhost:8080/credentials/save', body, httpOptions)
      // .subscribe(res => { console.log(res); }, err => { console.log('An error has occurred'); })
      ;
  }
}
