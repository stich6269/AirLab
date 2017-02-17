import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthComponent } from "./auth.component";
import { AuthService } from '../shared/guards/auth-service';
import { UnauthGuard } from '../shared/guards/unauth-guard';

import { MaterialModule } from '../shared/material.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { RestoreComponent } from './restore/restore.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        AuthComponent,
        RegistrationComponent,
        RestoreComponent
    ],
    providers: [
        AuthService,
        UnauthGuard
    ],
})
export class AuthModule { }
