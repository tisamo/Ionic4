import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'za', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
 // { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  // { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: '', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule' },
  { path: 'vegetableitemview', loadChildren: './vegetableitemview/vegetableitemview.module#VegetableitemviewPageModule' },
  { path: 'itemview/:id', loadChildren: './pages/itemview/itemview.module#ItemviewPageModule' },
  { path: 'items', loadChildren: './pages/items/items.module#ItemsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
