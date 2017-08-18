import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssuesListService } from './issues-list/services/issues-list.service';
import { NewIssueComponent } from './issues-list/new-issue/new-issue.component';
import { IssuesRoutingModule } from './issues-routing.module';
import { SharedComponentsModule } from '../../modules/shared-components/shared-components.module';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IssuesRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ IssuesListComponent, NewIssueComponent ],
  exports: [ IssuesListComponent ],
  providers: [ IssuesListService ]
} )
export class IssuesModule {}
