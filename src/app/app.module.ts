import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ListingComponent } from './event-listing/listing.component';
import { DetailComponent } from './event-detail/detail.component';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent, 
    HomeComponent,   
    ProfileComponent, 
    ListingComponent, 
    DetailComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
