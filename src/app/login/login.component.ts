import {Component, OnInit} from '@angular/core';
import {invalid} from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginErrorMessage = 'Invalid credentials';
  loginCorrect = true;

  constructor() {
  }

  ngOnInit() {
  }

  handleLogin(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginCorrect = true;
    } else {
      this.loginCorrect = false;
    }
  }

}
