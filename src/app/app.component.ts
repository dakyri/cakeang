import { Component } from '@angular/core';
import { CakeService } from './cake.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello {{name}}</h1>
        <router-outlet></router-outlet>
        `,
    providers: [CakeService]
})

export class AppComponent  {
    name = 'Cake Lovers';
}
