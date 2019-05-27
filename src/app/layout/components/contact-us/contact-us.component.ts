import {Component, OnInit, Optional} from '@angular/core';
import {ConfigOptionsService} from '../../../core/config-options/config-options.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService
  ) {
  }

  ngOnInit() {
    return this.configOptionsService ? this.configOptionsService.getSettings() : 'The list of setting is empty';
  }

}
