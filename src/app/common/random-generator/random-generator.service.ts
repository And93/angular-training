import {Injectable} from '@angular/core';

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbs = '0123456789';

@Injectable()
export class RandomGeneratorService {

  constructor() {
  }

  getRandomString(n: number) {
    let values = '';

    const possible = letters + letters.toUpperCase() + numbs;

    for (let i = 0; i < n; i++) {
      values += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return values;
  }

}
