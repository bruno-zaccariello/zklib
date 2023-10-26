import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGenericoComponent } from './form-generico/form-generico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../../../zklib-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    FormGenericoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
