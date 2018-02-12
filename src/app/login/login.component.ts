import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.interface';

@Component({
  selector: 'exp-cal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LogginedUser: User = {name: '', password: ''};
  constructor() { }
  Submit() {
    alert(this.LogginedUser.name);
  }
}
