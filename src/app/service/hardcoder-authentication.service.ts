import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcoderAuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    sessionStorage.getItem('authenticaterUser');
  }
}
