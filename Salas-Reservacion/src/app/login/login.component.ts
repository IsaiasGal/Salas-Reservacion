import { Component } from '@angular/core';
import { Context } from '../../context';
import { LoginRequest } from '../services/models/request/LoginRequest.model';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email!: string;
  password!: string;
  
  userSubscription: Subscription = new Subscription;

  constructor(private _userservice: UserService) {
  }


  onClickLogin() {
    let request: LoginRequest = {
      correo: this.email,
      contrasena: this.password
    };
    Context.IsLogged = true;
    this.userSubscription = this._userservice.Login(request).subscribe((it) => {
      if (it.OcurrioUnError === false) {
        
      }
      else {
        alert(it.MensajeDeRespuesta);
      }
    });
  }
}


