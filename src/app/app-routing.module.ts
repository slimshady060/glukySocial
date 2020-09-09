import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { MessagesComponent } from './messages/messages.component';
import { MainComponent } from './main/main.component';
import { BaseComponent } from './base/base.component';
import { AuthGuardService } from './services/auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'persons',
        component: PersonsComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
