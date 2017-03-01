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
 * Created by dak on 3/1/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var cake_1 = require('./cake');
var cake_service_1 = require("./cake.service");
var CakeDetailsComponent = (function () {
    function CakeDetailsComponent(cakeService, route, router) {
        this.cakeService = cakeService;
        this.route = route;
        this.router = router;
        this.id = '';
    }
    CakeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscriber = this.route.params.subscribe(function (params) {
            _this.id = (params['id']);
            if (!(_this.id)) {
                _this.id = '';
                _this.cake = new cake_1.Cake();
            }
            else {
                _this.cakeService.get(_this.id)
                    .subscribe(function (c) { return _this.cake = c; });
            }
        });
    };
    CakeDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.routeSubscriber != null)
            this.routeSubscriber.unsubscribe();
    };
    CakeDetailsComponent.prototype.gotoMainList = function () {
        var link = ['/cakes'];
        this.router.navigate(link);
    };
    CakeDetailsComponent.prototype.saveCakeDetails = function () {
        this.cakeService.save(this.cake)
            .subscribe(function (r) { console.log('success'); });
    };
    CakeDetailsComponent = __decorate([
        core_1.Component({
            selector: 'cake-details',
            templateUrl: 'app/cake-details.component.html'
        }), 
        __metadata('design:paramtypes', [cake_service_1.CakeService, router_1.ActivatedRoute, router_1.Router])
    ], CakeDetailsComponent);
    return CakeDetailsComponent;
}());
exports.CakeDetailsComponent = CakeDetailsComponent;
//# sourceMappingURL=cake-details.component.js.map