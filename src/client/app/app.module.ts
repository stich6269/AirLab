import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './+auth/index';

import { HttpClient } from './shared/http/http';
import { AlertService } from './shared/alert/alert-service';
import { UserService } from './shared/user/user-service';
import { MaterialModule } from './shared/material.module';
import { DashboardModule } from './+dashboard/index';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        SharedModule.forRoot(),
        MaterialModule.forRoot(),

        AuthModule,
        DashboardModule
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '<%= APP_BASE %>'
        },
        HttpClient,
        AlertService,
        UserService
    ],
    bootstrap: [AppComponent]

})

export class AppModule {
}
