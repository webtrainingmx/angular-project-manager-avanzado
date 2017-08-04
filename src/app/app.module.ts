import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2Webstorage } from 'ngx-webstorage';

import { SharedComponentsModule } from './modules/shared-components/shared-components.module';
import { ProjectsModule } from './auth/projects/projects.module';
import { IssuesModule } from './auth/issues/issues.module';
import { LoginModule } from './public/login/login.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './modules/shared-components/layout/header/header.component';
// import { IssuesListService } from './auth/issues/issues-list/services/issues-list.service';
// import { IssuesListComponent } from './auth/issues/issues-list/issues-list.component';
import { HomeComponent } from './auth/home/home.component';
// import { NotFoundComponent } from './modules/shared-components/not-found/not-found.component';
// import {SortingComponent} from './modules/shared-components/sorting/sorting.component';
// import {GroupingComponent} from './modules/shared-components/grouping/grouping.component';

// import { NewIssueComponent } from './auth/issues/issues-list/new-issue/new-issue.component';
import { HttpService } from './common/services/http.service';
// import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {LoaderComponent} from './common/loader/loader.component';
import { AuthGuard } from 'app/common/guards/auth.guard';
import { AuthenticationService } from './common/services/authentication.service';
// import { LoginComponent } from './public/login/login.component';
import { PublicGuard } from './common/guards/public.guard';
// import { routes } from './routes';
// import { ProjectsHomeComponent } from './auth/projects/projects-home/projects-home.component';

// import { MomentPipe } from './modules/shared-components/pipes/moment-pipe.pipe';

@NgModule( {
  declarations: [
    AppComponent,
    // HeaderComponent,
    // ProjectListComponent,
    // IssuesListComponent,
    HomeComponent,
    // NotFoundComponent,
    // SortingComponent,
    // GroupingComponent,
    // NewProjectComponent,
    // NewIssueComponent,
    // LoaderComponent,
    // LoginComponent,
    // ProjectsHomeComponent,
    // ProjectDetailComponent,
    // MomentPipe
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    // RouterModule.forRoot( routes ),
    HttpModule,
    BrowserAnimationsModule,
    // JasperoAlertsModule,
    Ng2Webstorage,
    SharedComponentsModule,
    ProjectsModule,
    IssuesModule,
    LoginModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    // ProjectListService,
    // IssuesListService,
    HttpService,
    PublicGuard, AuthGuard, // Guards
    AuthenticationService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
