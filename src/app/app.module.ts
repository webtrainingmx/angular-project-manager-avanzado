import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2Webstorage } from 'ngx-webstorage';

import { NotFoundModule } from './modules/not-found/not-found.module';
import { HeaderModule } from './modules/layout/header/header.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpService } from './common/services/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from 'app/common/guards/auth.guard';
import { AuthenticationService } from './common/services/authentication.service';

import { PublicGuard } from './common/guards/public.guard';

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2Webstorage,
    HeaderModule,
    NotFoundModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    HttpService,
    PublicGuard, AuthGuard, // Guards
    AuthenticationService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
