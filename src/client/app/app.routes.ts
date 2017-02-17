import { Routes } from '@angular/router';

import { AuthRouter } from './+auth/auth.routes';
import { DashboardRoutes } from './+dashboard/index';

export const routes:Routes = [
    ...DashboardRoutes,
    ...AuthRouter,
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    }
];
