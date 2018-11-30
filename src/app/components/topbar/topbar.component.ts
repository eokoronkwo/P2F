import { Component, OnInit, DoCheck } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, DoCheck {

  show: boolean;

  constructor(private commService: CommunicationService,
    private auth: AuthService,
    private router: Router) {

    }

  ngOnInit() {

  }

  ngDoCheck() {

    this.show = this.commService.getShow();

  }

  logout() {
    this.commService.setCurrentUser(undefined);
    this.auth.logout();
    this.router.navigate(['']);
  }

}
