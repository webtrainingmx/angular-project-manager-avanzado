import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsModule } from '../projects/projects.module';
import { IssuesModule } from '../issues/issues.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule( {
  imports: [
    RouterModule,
    CommonModule,
    // ProjectsModule,
    HomeRoutingModule,
    // IssuesModule,
  ],
  declarations: [ HomeComponent ]
} )
export class HomeModule {}
