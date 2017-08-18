import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule( {
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    UsersRoutingModule
  ],
  declarations: [ NewUserComponent ]
} )
export class UsersModule {}
