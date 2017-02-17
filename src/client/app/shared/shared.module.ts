import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarModule } from './toolbar/toolbar.module';
import { NavbarModule } from './navbar/navbar.module';
import { MaterialModule } from './material.module';
import { NameListService } from './name-list/index';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule.forRoot()],
    exports: [
        ToolbarModule,
        NavbarModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class SharedModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [NameListService]
        };
    }
}