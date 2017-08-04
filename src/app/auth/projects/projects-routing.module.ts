import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewProjectComponent } from './project-list/new-project/new-project.component';
// import { AuthGuard } from '../../common/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: '',
  component: ProjectsHomeComponent,
  children: [
    { path: '', component: ProjectListComponent, pathMatch: 'full' },
    { path: 'detalle/:id', component: ProjectDetailComponent },
    { path: 'nuevo', component: NewProjectComponent }
  ]
} ];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ],
  declarations: []
} )

export class ProjectsRoutingModule {}
