import {Component, OnInit, OnDestroy} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

import {filter} from 'rxjs/operators';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  isAdminComponent = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.isAdminComponent = true;
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => this.isAdminComponent = !!(event.url === '/admin'));
  }

  ngOnDestroy() {
    this.isAdminComponent = false;
  }

  onProducts() {
    this.router.navigate(['admin/products']);
  }

}
