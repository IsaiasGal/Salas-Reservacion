import { Component } from '@angular/core';

@Component({
  selector: 'app-agendar-sala',
  templateUrl: './agendar-sala.component.html',
  styleUrl: './agendar-sala.component.css'
})
export class AgendarSalaComponent {
  fechaSeleccionada: Date = new Date();
  isDateSeleccionada: boolean = false;

  onDateSelected($event: any) {
    this.fechaSeleccionada = $event[0];
    this.isDateSeleccionada = true;
    console.log($event);
    console.log($event[0]);
    console.log($event[0].getDate);
  }
}
