import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from "../../shared/guards/auth-service";
import { UserService } from '../../shared/user/user-service';

@Component({
    moduleId: module.id,
    selector: 'al-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css', '../auth.component.css'],
})

export class LoginComponent implements OnInit {
    loginForm:FormGroup;
    error:string;

    constructor(
        private formBuilder:FormBuilder,
        private router:Router,
        private userService: UserService,
        private authService:AuthService) {}

    ngOnInit():void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.error = '';
        })
    }

    goToSignUp(): void{
        this.router.navigate(['/auth/registration']);
    }

    onSubmit():any {
        this.authService.login(this.loginForm.value)
            .subscribe(
                response => {
                    if (response) {
                        this.userService.update(response);
                        this.router.navigate(['/dashboard']);
                    }
                },
                error => { this.error = error; }
            );
    }
}
