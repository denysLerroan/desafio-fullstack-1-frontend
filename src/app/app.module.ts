import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListagemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
