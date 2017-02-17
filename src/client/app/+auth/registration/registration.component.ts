import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../shared/guards/auth-service";
import { Router } from '@angular/router';
import { UserService } from '../../shared/user/user-service';

@Component({
    moduleId: module.id,
    selector: 'al-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css', '../auth.component.css']
})

export class RegistrationComponent implements OnInit {
    registerForm:FormGroup;
    error: string;

    constructor(
        private formBuilder:FormBuilder,
        private router: Router,
        private userService: UserService,
        private authService:AuthService ) {};

    ngOnInit():void {
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            deviceId: ['', Validators.required]
        });

        this.registerForm.valueChanges.subscribe(() => {
            this.error = '';
        })
    }

    goToLogin(): void{
        this.router.navigate(['/auth']);
    }

    onSubmit():void {
        var user = {
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            deviceIds: [this.registerForm.value.deviceId],
        };

        this.authService.signUp(user)
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
