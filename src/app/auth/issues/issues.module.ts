import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssuesListService } from './issues-list/services/issues-list.service';
import { NewIssueComponent } from './issues-list/new-issue/new-issue.component';
import { IssuesRoutingModule } from './issues-routing.module';
import { SharedComponentsModule } from '../../modules/shared-components/shared-components.module';
import { IssuesButtonReasignComponent } from './issues-list/issues-actions/issues-button-reasign/issues-button-reasign.component';
import { IssuesButtonCloseComponent } from './issues-list/issues-actions/issues-button-close/issues-button-close.component';
import { IssuesButtonWatchComponent } from './issues-list/issues-actions/issues-button-watch/issues-button-watch.component';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IssuesRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    IssuesListComponent, NewIssueComponent,
    IssuesButtonReasignComponent, IssuesButtonCloseComponent, IssuesButtonWatchComponent ],
  exports: [ IssuesListComponent ],
  providers: [ IssuesListService ]
} )
export class IssuesModule {}
