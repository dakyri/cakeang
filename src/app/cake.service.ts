/**
 * Created by dak on 2/28/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Cake } from './cake'

const mockData : Cake[] = [
    { name: 'Carrot', id: '1', comment: 'Healthy!', imageUrl: '', yumFactor: 3.1},
    { name: 'Banana', id: '2', comment: 'Mouldy!', imageUrl: '', yumFactor: 3.2}
];

@Injectable()
export class CakeService {
    private baseUrl: string = 'http://52.31.91.48:5000/api';

    constructor(private http : Http){
    }
/*
    getAll(): Cake[] {
        return mockData;
    }

    get(id: number) : Cake {
        return this.clone(mockData.find(p => p.id === id));
    }


    save(cake: Cake) {
//        alert(`saved!!! ${JSON.stringify(cake)}`);
        if (isNaN(cake.id)) {
            cake.id = this.getMockId();
        }
        let c = mockData.find(p => p.id === cake.id);
        if (c) {
            Object.assign(c, cake);
        } else {
            mockData[mockData.length] = cake;
        }
    }

    getMockId(): number {
        let id = -1;
        for (let c of mockData) {
            if (c.id >= id) {
                id = c.id + 1;
            }
        }
        return id;
    }
 */

    getAll(): Observable<Cake[]> {
        let cake$ = this.http
            .get(`${this.baseUrl}/cakes`, {headers: this.getHeaders()})
            .map(this.mapCakes);
        return cake$;
    }

    get(id: string): Observable<Cake> {
        let cake$ = this.http
            .get(`${this.baseUrl}/cakes/${id}`, {headers: this.getHeaders()})
            .map(this.mapCake);
        return cake$;
    }

    toCake(r:any): Cake {
        let cake = <Cake>({
            id: r.id,
            name: r.name,
            comment: r.comment,
            imageUrl: r.imageUrl,
            yumFactor: r.yumFactor,
        });
        return cake;
    }

    mapCakes(response:Response): Cake[]{
        return response.json().map(r  => {
            let cake = <Cake>({
                id: r.id,
                name: r.name,
                comment: r.comment,
                imageUrl: r.imageUrl,
                yumFactor: r.yumFactor,
            });
            return cake;
        })
    }

    mapCake(response:Response): Cake {
        let r = response.json();
        let cake = <Cake>({
            id: r.id,
            name: r.name,
            comment: r.comment,
            imageUrl: r.imageUrl,
            yumFactor: r.yumFactor,
        });
        return cake;
    }

    save(cake: Cake) : Observable<Response> {
         return this.http
            .put(`${this.baseUrl}/cake/${cake.id}`, JSON.stringify(cake), {headers: this.getHeaders()});
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private clone(object: any){
        return JSON.parse(JSON.stringify(object));
    }

}