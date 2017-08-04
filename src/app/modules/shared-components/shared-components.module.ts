import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SortingComponent } from './sorting/sorting.component';
import { GroupingComponent } from './grouping/grouping.component';
import { MomentPipe } from './pipes/moment-pipe.pipe';
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoaderComponent,
    SortingComponent,
    GroupingComponent,
    HeaderComponent,
    NotFoundComponent,
    MomentPipe ],
  exports: [
    LoaderComponent,
    SortingComponent,
    GroupingComponent,
    HeaderComponent,
    NotFoundComponent,
    MomentPipe ]
} )
export class SharedComponentsModule {

}
