import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ListingComponent } from './event-listing/listing.component';
import { DetailComponent } from './event-detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'profile', component: ProfileComponent },  
  { path: 'activities', component: ListingComponent },
  { path: 'detail', component: DetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
