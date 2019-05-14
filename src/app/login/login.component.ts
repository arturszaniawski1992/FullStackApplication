import {Component, OnInit} from '@angular/core';

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
  isAccepted = false;
  regulationsMessage = 'Zaakceptuj regulamin!';


  constructor() {
  }

  ngOnInit() {
  }

  acceptRegulations() {
    this.isAccepted = !this.isAccepted;
  }

  handleLogin(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginCorrect = true;
    } else {
      this.loginCorrect = false;
    }
  }

}
