import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'al-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css'],
})

export class ToolbarComponent {
    selected = '';
    items = [
        {text: 'Refresh'},
        {text: 'Settings'},
        {text: 'Help', disabled: true},
        {text: 'Sign Out'}
    ];

    select(text: string) {
        this.selected = text;
    }
}
