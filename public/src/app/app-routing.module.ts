import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'create', component: AddComponent}, 
    { path: 'edit/:id', component: EditComponent },
  { path: 'show', component: ShowAllComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch:'full', redirectTo:'/home'},
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
