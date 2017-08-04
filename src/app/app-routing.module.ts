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
    path: 'home', loadChildren: './auth/home/home.module#HomeModule',
    data: { name: 'Home' }, canActivate: [ AuthGuard ]
  },
  {
    path: 'proyectos', loadChildren: './auth/projects/projects.module#ProjectsModule',
    data: { name: 'Proyectos' }, canActivate: [ AuthGuard ]
  },
  {
    path: 'issues', loadChildren: './auth/issues/issues.module#IssuesModule',
    data: { name: 'Issues' }, canActivate: [ AuthGuard ]
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
