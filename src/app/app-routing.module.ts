import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/common/guards/auth.guard';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { PublicGuard } from './common/guards/public.guard';


export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', loadChildren: './public/login/login.module#LoginModule',
    pathMatch: 'full', canActivate: [ PublicGuard ]
  },
  {
    path: 'auth', loadChildren: './auth/home/home.module#HomeModule',
    data: { name: 'Home' }, canActivate: [ AuthGuard ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ),
  ],
  declarations: []
} )
export class AppRoutingModule {}
