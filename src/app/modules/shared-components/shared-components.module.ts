import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SortingComponent } from './sorting/sorting.component';
import { GroupingComponent } from './grouping/grouping.component';
import { MomentPipe } from './pipes/moment-pipe.pipe';
import { AppForDirective } from './app-for/app-for.directive';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoaderComponent,
    SortingComponent,
    GroupingComponent,
    MomentPipe,
    AppForDirective ],
  exports: [
    LoaderComponent,
    SortingComponent,
    GroupingComponent,
    MomentPipe,
    AppForDirective ]
} )
export class SharedComponentsModule {

}
