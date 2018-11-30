import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private commService: CommunicationService,
    private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.commService.setCurrentUser(undefined);
    this.auth.logout();
  }

}
