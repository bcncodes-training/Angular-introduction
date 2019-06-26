import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChampionishipsComponent } from './championiships/championiships.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionishipsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ChampionishipsComponent]
})
export class AppModule { }
