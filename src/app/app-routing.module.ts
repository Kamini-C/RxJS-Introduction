import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreationFunctionComponent } from './pages/creation-function/creation-function.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path: 'pages', component: PagesComponent, children:[
    {path: 'creation-function',component:CreationFunctionComponent}
  ]},
  {path:'' ,redirectTo:'pages', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
