import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoryItemsPage } from './categoryitems.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryItemsPage
  },
  {
    path: 'items/:id',
    component: CategoryItemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryItemsPage]
})
export class CategoryItemsPageModule {}
