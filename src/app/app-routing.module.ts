import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationFunctionComponent } from './pages/creation-function/creation-function.component';
import { HandlingErrorsComponent } from './pages/handling-errors/handling-errors.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path: 'pages', component: PagesComponent, children:[
    { path: 'creation-function', component: CreationFunctionComponent },
    { path: 'operators', component: OperatorsComponent },
    { path: 'handling-error', component: HandlingErrorsComponent },
  ]},
  {path:'' ,redirectTo:'pages', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
