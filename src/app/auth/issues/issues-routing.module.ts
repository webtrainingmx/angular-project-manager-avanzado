import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { NewIssueComponent } from './issues-list/new-issue/new-issue.component';

const routes: Routes = [
  {
    path: '',
    component: IssuesListComponent
  },
  { path: 'nuevo', component: NewIssueComponent }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [],
  declarations: []
} )
export class IssuesRoutingModule {}
