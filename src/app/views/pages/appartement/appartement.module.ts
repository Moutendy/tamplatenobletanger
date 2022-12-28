import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppartementComponent } from './appartement.component';
import { AjouterappartementComponent } from '../ajouterappartement/ajouterappartement.component';

const routes: Routes = [
  {
    path: '',
    component: AppartementComponent
  },

  {
    path: 'ajouterappartement',
    component: AjouterappartementComponent
  }
]

@NgModule({
  declarations: [AppartementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class AppartementModule { }
