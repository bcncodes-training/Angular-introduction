import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestChampionsComponent } from './latest-champions/latest-champions.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestChampionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LatestChampionsComponent]
})
export class AppModule { }
