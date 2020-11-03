import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwelveComponent } from './boards/twelve/twelve.component';
import { SixteenComponent } from './boards/sixteen/sixteen.component';
import { TwentyComponent } from './boards/twenty/twenty.component';

@NgModule({
  declarations: [
    AppComponent,
    TwelveComponent,
    SixteenComponent,
    TwentyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
