import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { VisiteurComponent } from './visiteur/visiteur.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,

  },
  {
    path: 'visiteur',
    component: VisiteurComponent,

  }
]

@NgModule({
  declarations: [UsersComponent, VisiteurComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
