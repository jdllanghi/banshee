import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadBansheeComponent } from './components/head-banshee/head-banshee.component';
import { BodyBansheeComponent } from './components/body-banshee/body-banshee.component';
import { LegsBansheeComponent } from './components/legs-banshee/legs-banshee.component';
import { FeetBansheeComponent } from './components/feet-banshee/feet-banshee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBansheeComponent,
    BodyBansheeComponent,
    LegsBansheeComponent,
    FeetBansheeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
