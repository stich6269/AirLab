import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../shared/guards/auth-guard';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [AuthGuard]
})

export class DashboardModule { }
