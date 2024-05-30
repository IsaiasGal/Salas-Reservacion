import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrl: './timepicker.component.css',
})
export class TimepickerComponent {
  time = { hour: 13, minute: 30 };
}
