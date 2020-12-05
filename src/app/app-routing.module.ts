import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudModule } from './crud/crud.module';

const routes: Routes = [
  { path: '', component: CrudModule, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
