import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private commService: CommunicationService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.commService.setCurrentUser(undefined);
    this.auth.logout();
    this.router.navigate(['']);
  }

}
