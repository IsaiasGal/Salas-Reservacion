import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaSalaComponent } from './nueva-sala/nueva-sala.component';
import { AgendarSalaComponent } from './agendar-sala/agendar-sala.component';
import { CrudSalaComponent } from './crud-sala/crud-sala.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'nueva', component: CrudSalaComponent},
  { path: 'creacion', component: NuevaSalaComponent},
  { path: 'agendar', component: AgendarSalaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);