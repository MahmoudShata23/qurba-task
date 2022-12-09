import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '404',
    component: ProductsComponent ,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: ProductsComponent,
    data: {
      title: 'Page 500'
    }
  }, {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  }, {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsComponent,
        // canActivate: [AuthGuard],
        data: {
          breadcrumb: [
            {
              label: 'Home',// pageOneID Parameter value will be add
              url: './'
            }
          ],
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
