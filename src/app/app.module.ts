import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Idioma
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeESP from '@angular/common/locales/es';

import { AppComponent } from './app.component';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';


registerLocaleData(localeESP);// Idioma

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   { provide: LOCALE_ID, useValue: 'es' }// Idioma
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
