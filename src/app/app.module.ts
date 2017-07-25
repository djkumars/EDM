import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {} from 'BrowserAnimationsModule';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/component/dashboard/dashboard.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule } from '@progress/kendo-angular-grid';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MenuComponent } from './shared/component/menu/menu.component';
import { FormComponent } from './form/form.component';
//import { ConfirmComponent } from './shared/component/confirm/confirm.component';


const appRoutes: Routes = [
//{ path: '/',component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: PagenotfoundComponent }
];
 
@NgModule({
  imports: [
    BrowserModule,
    GridModule,
     LayoutModule,
     ButtonsModule,
     BrowserAnimationsModule,
     //Ng2MenuModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  declarations: [
    AppComponent, DashboardComponent, PagenotfoundComponent, 
    MenuComponent, FormComponent, 
    //ConfirmComponent, 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
