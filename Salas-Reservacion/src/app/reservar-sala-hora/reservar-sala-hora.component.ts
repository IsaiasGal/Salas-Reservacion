import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar-sala-hora',
  templateUrl: './reservar-sala-hora.component.html',
  styleUrl: './reservar-sala-hora.component.css'
})
export class ReservarSalaHoraComponent implements OnInit {
  @Input() fecha: Date = new Date();
  FechaEscritada: string = '';
  

  public FromTime = '08:00:00';
  public ToTime = '08:00:00';
  public minValue = '08:00:00';
  public maxValue = '08:00:00';

  constructor() {

  }
  ngOnInit(): void {
    console.log(this.fecha.toLocaleDateString('es-ES'))
    let opciones: any | undefined = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    this.FechaEscritada = this.fecha.toLocaleDateString('es-ES', opciones);
  }
}
