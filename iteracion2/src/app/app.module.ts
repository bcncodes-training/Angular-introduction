import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { ColorButtonsComponent } from './color-buttons/color-buttons.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    HeaderComponent,
    ColorButtonsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CommentComponent, HeaderComponent, ColorButtonsComponent, PostComponent]
})
export class AppModule { }
