import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SortingComponent } from './sorting/sorting.component';
import { GroupingComponent } from './grouping/grouping.component';
import { MomentPipe } from './pipes/moment-pipe.pipe';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoaderComponent,
    SortingComponent,
    GroupingComponent,
    MomentPipe ],
  exports: [
    LoaderComponent,
    SortingComponent,
    GroupingComponent,
    MomentPipe ]
} )
export class SharedComponentsModule {

}
