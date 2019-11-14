import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
  { path: 'model/:id', component: ModelDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
