import { Injectable } from '@angular/core';
import { HttpClient } from "../http/http";
import { Router } from "@angular/router";
import { UserService } from "../user/index";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()

export class AuthService {
    loggedIn:boolean = false;

    constructor(
        private http:HttpClient,
        private router:Router,
        private userService:UserService) {};

    check(): Promise<any> {
        return new Promise(resolve => {
            this.http.get('authService/check')
                .subscribe(
                    response => {
                        if (response) {
                            this.userService.update(response);
                            resolve(true);
                        }
                    },
                    error => { resolve(false) }
                );
        });
    }

    login(data:{email:string, password:string}): Subject<any> {
        return this.http.post('authService/login', JSON.stringify(data))
    }

    signUp(user:{email:string, password:string, deviceIds:any}):Subject<any> {
        return this.http.post('authService/registration', JSON.stringify(user))
    }

    logout():void {
        this.http.post('authService/logout')
    }
}
