import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';

import { MdIconModule } from '@angular2-material/icon';
import { ToolbarComponent } from './toolbar.component';
import { MdMenuModule, MdMenuTrigger, MdMenuItem } from '@angular2-material/menu';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MdToolbarModule,
        MdIconModule ,
        MdButtonModule,
        MdMenuModule,
        MdButtonModule,
    ],
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent],
})

export class ToolbarModule { }
