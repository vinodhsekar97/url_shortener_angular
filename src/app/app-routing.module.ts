import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlTableComponent } from './url-table/url-table.component';
import { UrlShortenerFormsComponent } from './url-shortener-forms/url-shortener-forms.component';


const routes: Routes = [
 {
   path:"",
   component: UrlShortenerFormsComponent
 },
 {
   path:"urltable",
   component: UrlTableComponent
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
