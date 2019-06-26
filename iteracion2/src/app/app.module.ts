import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommentsComponent } from './article-comment.component';
import { FormularioComentariosComponent } from './formulario-comentarios/formulario-comentarios.component';

@NgModule({
  declarations: [AppComponent, CommentsComponent, FormularioComentariosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
