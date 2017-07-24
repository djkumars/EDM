import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent }
];
 
@NgModule({
  imports: [
    BrowserModule,
    GridModule,
     LayoutModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  declarations: [
    AppComponent, DashboardComponent, PagenotfoundComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
