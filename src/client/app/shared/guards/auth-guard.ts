import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth-service';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(
        private _auth:AuthService,
        private _router:Router) {};

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any> {
        return Observable.fromPromise(this._auth.check())
            .map(authState => {
                if (!authState) this._router.navigate(['/auth']);
                return !!authState;
            }).take(1)
    }
}
