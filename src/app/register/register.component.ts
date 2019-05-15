import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isAccpeted = false;

  constructor() {
  }

  ngOnInit() {
  }

  acceptRegulations() {
    this.isAccpeted = !this.isAccpeted;
  }
}
