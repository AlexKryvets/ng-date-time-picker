import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date = new Date('2022-10-10 10:00');

  showSpinners = false;

  hideTime = false;

  enableMeridian = false;

  showSeconds = false;

  touchUI = false;

  stepMinute = 10;
}
