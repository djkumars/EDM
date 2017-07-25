import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/component/dashboard/dashboard.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

import { GridModule } from '@progress/kendo-angular-grid';
//import {} from '@progress/kendo-angular-'
import { LayoutModule } from '@progress/kendo-angular-layout';

//import { Ng2MenuModule } from 'ng2-Menu';
//import { MasterComponent } from './dashboard/master/master.component';
//import { ChildComponent } from './dashboard/child/child.component';

const appRoutes: Routes = [
//{ path: '/',component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent }
];
 
@NgModule({
  imports: [
    BrowserModule,
    GridModule,
     LayoutModule,
     //Ng2MenuModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  declarations: [
    AppComponent, DashboardComponent, PagenotfoundComponent, 
    
    //MasterComponent, ChildComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
