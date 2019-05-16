import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcoderAuthenticationService} from '../service/hardcoder-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginCorrect = true;
  loginErrorMessage = 'Nieprawidłowa nazwa lub hasło!';


  constructor(private router: Router, private authenticationService: HardcoderAuthenticationService) {
  }

  ngOnInit() {
  }

  handleLogin(): void {
    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.loginCorrect = true;
      this.router.navigate(['products']);
    } else {
      this.loginCorrect = false;
    }
  }



}
