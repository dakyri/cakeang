"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dak on 2/28/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var cake_1 = require('./cake');
var mockData = [
    { name: 'Carrot', id: '1', comment: 'Healthy!', imageUrl: '', yumFactor: 3.1 },
    { name: 'Banana', id: '2', comment: 'Mouldy!', imageUrl: '', yumFactor: 3.2 }
];
var CakeService = (function () {
    function CakeService(http) {
        this.http = http;
        this.baseUrl = 'http://52.31.91.48:5000/api';
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
    CakeService.prototype.mapCakes = function (response) {
        return response.json().map(cake_1.Cake.from);
    };
    CakeService.prototype.mapCake = function (response) {
        return cake_1.Cake.from(response.json());
    };
    CakeService.prototype.getAll = function () {
        var cake$ = this.http
            .get(this.baseUrl + "/cakes", { headers: this.getHeaders() })
            .map(this.mapCakes);
        return cake$;
    };
    CakeService.prototype.get = function (id) {
        var cake$ = this.http
            .get(this.baseUrl + "/cakes/" + id, { headers: this.getHeaders() })
            .map(this.mapCake);
        return cake$;
    };
    CakeService.prototype.save = function (cake) {
        return this.http
            .put(this.baseUrl + "/cake/" + cake.id, JSON.stringify(cake), { headers: this.getHeaders() });
    };
    CakeService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    CakeService.prototype.clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    CakeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CakeService);
    return CakeService;
}());
exports.CakeService = CakeService;
//# sourceMappingURL=cake.service.js.map