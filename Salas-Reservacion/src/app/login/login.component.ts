import { Component } from '@angular/core';
import { Context } from '../../context';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor() {}

  onClickLogin() {
    Context.IsLogged = true;
  }
}
