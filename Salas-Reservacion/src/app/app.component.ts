import { Component } from '@angular/core';
import { Context } from '../context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Salas-Reservacion';

  get IsLogged() {
    return Context.IsLogged;
  }

  onCerrarSesion() {
    Context.IsLogged = false;
  }
}
