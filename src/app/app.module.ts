import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2Webstorage } from 'ngx-webstorage';

import { SharedComponentsModule } from './modules/shared-components/shared-components.module';
import { LoginModule } from './public/login/login.module';
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
    SharedComponentsModule,
    LoginModule,
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
