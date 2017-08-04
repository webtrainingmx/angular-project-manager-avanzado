import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsModule } from '../projects/projects.module';
import { IssuesModule } from '../issues/issues.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    ProjectsModule,
    IssuesModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent ]
} )
export class HomeModule {}
