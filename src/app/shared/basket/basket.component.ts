import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {BasketItemsService} from './service/basket-items.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(
    public basketItemsService: BasketItemsService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onBasket() {
    this.basketItemsService.setBoughtProducts();
    this.router.navigate(['/basket']);
  }

}
