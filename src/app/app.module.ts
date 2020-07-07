import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';
import { PessoasService } from './pessoas.service';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListagemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PessoasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
