import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule
  ],
  declarations: []
} )
export class UsersModule {}
