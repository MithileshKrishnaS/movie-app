import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymovieComponent } from './mymovie/mymovie.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { HttpClientModule } from '@angular/common/http';
import { PipePipe } from './pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MymovieComponent,
    MyhomeComponent,
    PipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
