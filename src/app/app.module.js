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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var cake_list_component_1 = require("./cake-list.component");
var cake_details_component_1 = require("./cake-details.component");
var page_error_component_1 = require("./page-error.component");
var routes = [
    {
        path: 'cakes',
        component: cake_list_component_1.CakeListComponent,
    },
    {
        path: 'cake/:id',
        component: cake_details_component_1.CakeDetailsComponent
    },
    {
        path: 'cake',
        component: cake_details_component_1.CakeDetailsComponent
    },
    // map '/' to '/cakes' as our default route
    {
        path: '',
        redirectTo: '/cakes',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: page_error_component_1.PageErrorComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(routes)],
            declarations: [app_component_1.AppComponent, cake_list_component_1.CakeListComponent, cake_details_component_1.CakeDetailsComponent, page_error_component_1.PageErrorComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map