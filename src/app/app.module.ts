import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { CreationFunctionComponent } from './pages/creation-function/creation-function.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { HandlingErrorsComponent } from './pages/handling-errors/handling-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    CreationFunctionComponent,
    OperatorsComponent,
    HandlingErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
