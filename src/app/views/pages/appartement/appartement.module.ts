import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppartementComponent } from './appartement.component';
import { AjouterappartementComponent } from '../ajouterappartement/ajouterappartement.component';
import { VilleComponent } from './ville/ville.component';

const routes: Routes = [
  {
    path: '',
    component: AppartementComponent
  },

  {
    path: 'ajouterappartement',
    component: AjouterappartementComponent
  },

  {
    path: 'ville',
    component: VilleComponent
  }
]

@NgModule({
  declarations: [AppartementComponent, VilleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class AppartementModule { }
