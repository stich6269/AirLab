import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UnauthGuard implements CanActivate {
    constructor(
        private auth: AuthService,
        private router: Router) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any> {
        return Observable.fromPromise(this.auth.check())
            .map(authState => {
                console.log(authState, '-------------------');
                if (authState) this.router.navigate(['/dashboard']);
                return !authState
            }).take(1)
    }
}



