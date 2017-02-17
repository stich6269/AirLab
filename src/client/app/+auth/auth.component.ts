import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'al-auth',
    styleUrls: ['auth.component.css'],
    template: `
        <div class="container">
            <router-outlet></router-outlet> 
        </div>`
})

export class AuthComponent {
}
