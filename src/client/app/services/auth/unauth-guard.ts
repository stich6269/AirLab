import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service';
import {Observable} from "rxjs/Rx";


@Injectable()
export class UnauthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}

  canActivate(): boolean {

    return true;
  }
}


/*return this.auth._auth
 .take(1)
 .map(authState => !authState)
 .do(unauthenticated => {
 if (!unauthenticated) {
 this.router.navigate(['/dashboard']);
 }
 });*/
