import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePage } from './save.page';

const routes: Routes = [
  {
    path: '',
    component: SavePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavePageRoutingModule { }
