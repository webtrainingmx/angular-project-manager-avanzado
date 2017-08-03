import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { SharedComponentsModule } from '../../modules/shared-components/shared-components.module';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListService } from './project-list/services/project-list.service';
import { NewProjectComponent } from './project-list/new-project/new-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    JasperoAlertsModule,
    SharedComponentsModule
  ],
  declarations: [
    NewProjectComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectsHomeComponent ],
  exports: [
    ProjectListComponent
  ],
  providers: [ ProjectListService ]
} )
export class ProjectsModule {}
