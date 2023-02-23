import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AuFaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
