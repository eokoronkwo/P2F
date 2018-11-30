import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  username;
  password;
  newUser;
  newPassword;
  firstName;
  lastName;
  birthday;
  email;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  itemSubscription: Subscription;
  data;
  userHelp;
  newUserHelp;


  constructor(private commService: CommunicationService,
    private router: Router,
    private userService: UserService,
    private auth: AuthService) { }

  // When user object comes in, checks if it is undefined (login error)
  // If login is sucessful, the userService will redirect user to proper page.
  ngOnInit() {
    this.userSubscription = this.commService
      .currentUserSubject.subscribe((user) => {
        if (user === null) {
          // this.loginFailed = true;
          // this.loading = false;
          // this.inputPassword = null;
          console.log('failed login in');
        } else {
          console.log('loginsuccess');
          this.router.navigate(['main-view']);
        }
      });
  }

  // submit() {
  //   this.userService.login(this.username, this.password);
  //   console.log(this.username);
  //   console.log(this.password);
  // }

  public submit() {
    // this.submitted = true;
    // this.loading = true;
    // this.auth.login(this.username, this.password)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['main-view']);
    //       console.log(data);
    //     },
    //     error => {
    //       this.error = error;
    //       this.loading = false;
    //     });
    this.userService.login(this.username, this.password);
  }

  createAccount() {
    this.newUser = '';
    this.newPassword = '';
    this.firstName = '';
    this.lastName = '';
    this.birthday = '';
    this.email = '';
    this.newUserHelp = '';

    // catch( error =>
    //       { console.error('error caught');
    //       return Observable.( {description: "Error Value Emitted"} ); }).

    this.userService.queryCredentials(this.newUser, this.newPassword).subscribe((payload) => {
      this.data = payload;

    });
    if (this.data === false) {
      this.newUserHelp = 'Username is already in use! Please enter a new one!';
    } else {
      this.newUserHelp = '';
      console.log('hello');
      const body = {
        username: this.newUser,
        // password: this.newPassword,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthday: this.birthday
      };
      this.userService.queryCreate(body).subscribe((payload) => {
        this.data = payload;
      });
      this.newUser = '';
      this.newPassword = '';
      this.firstName = '';
      this.lastName = '';
      this.birthday = '';
      this.email = '';
    }
  }

  ngOnDestroy() {
    if (this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

}

