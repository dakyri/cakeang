/**
 * Created by dak on 3/1/2017.
 */
import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Cake } from './cake'
import { CakeService } from "./cake.service";

@Component({
    selector: 'cake-details',
    templateUrl: 'app/cake-details.component.html'
})

export class CakeDetailsComponent implements OnInit {
    cake: Cake;
    id: string;
    routeSubscriber: any;

    constructor(private cakeService: CakeService,
                private route: ActivatedRoute,
                private router: Router){
        this.id = '';
    }

    ngOnInit() {
        this.routeSubscriber = this.route.params.subscribe(params => {
            this.id = (params['id']);
            if (!(this.id)) {
                this.id = '';
                this.cake = new Cake();
            } else {
                this.cakeService.get(this.id)
                    .subscribe(c => this.cake = c);
            }
        });
    }

    ngOnDestroy(){
        if (this.routeSubscriber != null)
            this.routeSubscriber.unsubscribe();
    }

    gotoMainList(){
        let link = ['/cakes'];
        this.router.navigate(link);
    }

    saveCakeDetails() {
        this.cakeService.save(this.cake)
            .subscribe(
                (r: Response) => {console.log('success');}
            );
    }
}
