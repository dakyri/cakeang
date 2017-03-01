import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CakeListComponent } from "./cake-list.component";
import { CakeDetailsComponent } from "./cake-details.component";
import { PageErrorComponent } from "./page-error.component";

const routes: Routes = [
    {
        path: 'cakes',
        component: CakeListComponent,
    },
    {
        path: 'cake/:id',
        component: CakeDetailsComponent
    },
    {
        path: 'cake',
        component: CakeDetailsComponent
    },
    // map '/' to '/cakes' as our default route
    {
        path: '',
        redirectTo: '/cakes',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageErrorComponent
    }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, CakeListComponent, CakeDetailsComponent, PageErrorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
