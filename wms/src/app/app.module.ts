import { FormsModule}from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { JobComponent } from './job/job.component';
import { ReceiveComponent } from './receive/receive.component';
import { RemoveinventoryComponent } from './removeinventory/removeinventory.component';
import { CheckinventoryComponent } from './checkinventory/checkinventory.component';
import { PickComponent } from './pick/pick.component';
import { BulkstowComponent } from './bulkstow/bulkstow.component';
import { StowComponent } from './stow/stow.component';
import { StorestowComponent } from './storestow/storestow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    JobComponent,
    ReceiveComponent,
    StowComponent,
    BulkstowComponent,
    PickComponent,
    StorestowComponent,
    CheckinventoryComponent,
    RemoveinventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', 
        redirectTo:'job',
        pathMatch:'full'
      },
      {
        path:'job', 
        component:JobComponent
      },
      {
        path:'login', 
        component:LoginComponent
      },
      {
        path:'receive', 
        component:ReceiveComponent
      },
      {
        path:'stow', 
        component:StowComponent
      },
      {
        path:'bulkstow', 
        component:BulkstowComponent
      },
      {
        path:'pick', 
        component:PickComponent
      },
      {
        path:'storestow', 
        component:StorestowComponent
      },
      {
        path:'checkinventory', 
        component:CheckinventoryComponent
      },
      {
        path:'removeinventory', 
        component:RemoveinventoryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
