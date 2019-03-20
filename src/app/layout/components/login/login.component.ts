import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {AuthService} from '../../../core/services/auth.service';
import {UsersService} from '../../../users/service/users.service';
import {UserModel} from '../../../users/models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  message: string;
  email: string;
  password: string;

  private unsubscribe: Subject<void> = new Subject();
  private users$: Observable<Array<UserModel>>;

  constructor(
    public authService: AuthService,
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnDestroy() {
    console.log('[takeUntil ngOnDestroy]');
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLogin() {
    this.message = 'Trying to log in ...';

    return this.users$
      .subscribe((users: UserModel[]) => {
        const isUser = users.find((user: UserModel) => user.email === this.email && user.password === this.password);
        if (!isUser) {
          return this.message = `The user with email: ${this.email} was not found`;
        }

        return this.authService
          .login()
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(
            () => {
              this.setMessage();
              if (this.authService.isLoggedIn) {
                const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                return this.router.navigate([redirect]);
              }
            },
            err => console.log(err),
            () => console.log('[takeUntil] complete')
          );
      });
  }

  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
    this.setMessage();
  }

}
