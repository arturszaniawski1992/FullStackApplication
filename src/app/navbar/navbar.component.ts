import {Component, OnInit} from '@angular/core';
import {HardcoderAuthenticationService} from '../service/hardcoder-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private authenticationService: HardcoderAuthenticationService) {
  }

  ngOnInit() {
  }

  handleLogout(): void {
    this.authenticationService.logOut();
  }

}
