import {Injectable} from '@angular/core';
import {HttpClient} from "../http/http";
import {Router} from "@angular/router";
import {UserService} from "../user/index";

@Injectable()

export class AuthService{
  loggedIn: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ){};

  check() {
    return new Promise(resolve => {
      this.http.get('authService/check')
        .subscribe(
          (response) => {
            if(response){
              this.userService.update(response);
              resolve(true)
            }
          });
      });
  }

  login(data: {email: string, password: string}): void {
    this.http.post('authService/login', JSON.stringify(data))
      .subscribe(
        response => {
          if(response) {
            this.userService.update(response);
            this.router.navigate(['/dashboard']);
          }
        });
  }

  signUp(user:{email: string, password: string, deviceIds: any}): void{
    this.http.post('authService/registration', JSON.stringify(user))
      .subscribe(
        (response) => {
          if(response){
            this.userService.update(response);
            this.router.navigate(['/dashboard'])
          }
        });
  }

  logout(): void{
    this.http.post('authService/logout')
  }
}
