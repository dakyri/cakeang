/**
 * Created by dak on 2/28/2017.
 */
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';

import { Cake } from './cake'
import { CakeService } from './cake.service'

@Component({
    selector: 'cake-list',
    templateUrl: 'app/cake-list.component.html'
})
//<a href="#" (click)="selectCake(cake)">{{cake.name}}<br/>
//<cake-details [cake]="selectedCake"></cake-details>

export class CakeListComponent implements OnInit {
    cakes: Cake[] = [];
    selectedCake: Cake;

    constructor(private _cakeService : CakeService){ }

    ngOnInit() {
//        this.cakes = this._cakeService.getAll();
        this._cakeService.getAll().subscribe(c => this.cakes = c);
    }

    selectCake(cake: Cake) {
        this.selectedCake = cake;
    }

    gotoAddCake(){
        window.location.href = '/cake';
    }


}