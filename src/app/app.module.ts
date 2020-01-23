import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinnerComponent } from './dinner/dinner.component';
import { GiftsModule } from './gifts/gifts.module';

@NgModule({
  declarations: [
    AppComponent,
    DinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GiftsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
