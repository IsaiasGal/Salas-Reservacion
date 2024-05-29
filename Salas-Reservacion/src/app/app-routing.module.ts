import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaSalaComponent } from './nueva-sala/nueva-sala.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { AgendarSalaComponent } from './agendar-sala/agendar-sala.component';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'nueva', component: NuevaSalaComponent},
  { path: 'perfil', component: PerfilUsuarioComponent},
  { path: 'agendar', component: AgendarSalaComponent},
  { path: 'calendario', component: CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);