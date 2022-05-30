import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewRicettaComponent } from 'src/newRicetta/newRicetta';
import { ElementoComponent } from './elemento/elemento.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRicettaComponent,
    ElementoComponent
  ],
  imports: [

  BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
