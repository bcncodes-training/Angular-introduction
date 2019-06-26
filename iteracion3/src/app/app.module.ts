import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsComponent } from './champions/champions.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ChampionsComponent]
})
export class AppModule { }
