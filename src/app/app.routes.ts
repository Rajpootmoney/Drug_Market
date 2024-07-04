import { Routes } from '@angular/router';
import { LoginComponent } from './Admin/login/login.component';
import { LayoutComponent } from './Admin/layout/layout.component';
import { ProductsComponent } from './Admin/products/products.component';

export const routes: Routes = [
  // these are just default routes of the application
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];
