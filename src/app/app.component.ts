import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {RandomGeneratorService} from './core/random-generator/random-generator.service';

const GetString = new InjectionToken<string>('getString');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: GetString,
      useFactory: () => (new RandomGeneratorService()).getRandomString(7)
    }
  ]
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(GetString) private getString: string
  ) {
  }

  ngOnInit() {
    return this.getString;
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }

  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }
}
