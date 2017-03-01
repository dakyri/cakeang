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
var cake_service_1 = require('./cake.service');
var CakeListComponent = (function () {
    function CakeListComponent(_cakeService) {
        this._cakeService = _cakeService;
        this.cakes = [];
    }
    CakeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //        this.cakes = this._cakeService.getAll();
        this._cakeService.getAll().subscribe(function (c) { return _this.cakes = c; });
    };
    CakeListComponent.prototype.selectCake = function (cake) {
        this.selectedCake = cake;
    };
    CakeListComponent.prototype.gotoAddCake = function () {
        window.location.href = '/cake';
    };
    CakeListComponent = __decorate([
        core_1.Component({
            selector: 'cake-list',
            templateUrl: 'app/cake-list.component.html'
        }), 
        __metadata('design:paramtypes', [cake_service_1.CakeService])
    ], CakeListComponent);
    return CakeListComponent;
}());
exports.CakeListComponent = CakeListComponent;
//# sourceMappingURL=cake-list.component.js.map