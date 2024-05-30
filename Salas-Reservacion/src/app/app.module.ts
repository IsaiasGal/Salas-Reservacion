import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaSalaComponent } from './nueva-sala/nueva-sala.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AgendarSalaComponent } from './agendar-sala/agendar-sala.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule, IgxDialogModule } from 'igniteui-angular';
import { CrudSalaComponent } from './crud-sala/crud-sala.component';
import { ReservarSalaHoraComponent } from './reservar-sala-hora/reservar-sala-hora.component';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { JsonPipe } from '@angular/common';
import axios from 'axios';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    NuevaSalaComponent,
    AgendarSalaComponent,
    CrudSalaComponent,
    ReservarSalaHoraComponent,
    TimepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    IgxCalendarModule,
    IgxDialogModule,
    NgbModule,
    NgbTimepickerModule,
    JsonPipe,
    HttpClientModule  
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
