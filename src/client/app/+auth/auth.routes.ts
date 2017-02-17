import { Routes } from '@angular/router';
import { AuthComponent } from "./auth.component";
import { LoginRoutes } from "./login/index";
import { RegistrationRoutes } from "./registration/index";
import { RestoreRoutes } from "./restore/index";
import { UnauthGuard } from "../shared/guards/index";

export const AuthRouter:Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        canActivate: [UnauthGuard],
        children: [
            ...LoginRoutes,
            ...RegistrationRoutes,
            ...RestoreRoutes
        ]
    }
];
