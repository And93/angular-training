import {Injectable} from '@angular/core';
import {ConfigOptions} from './config-options.model';

@Injectable()
export class ConfigOptionsService {

  private settings: ConfigOptions;

  constructor() {
  }

  setSettings(params: any) {
    return this.settings = params;
  }

  getSettings() {
    return this.settings;
  }
}
