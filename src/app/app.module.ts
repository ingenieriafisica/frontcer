import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GeneralModule } from './general/general.module';
import { AppComponent } from './app.component';
import { NavbarcerComponent } from './navbarcer/navbarcer.component';
import { FootercerComponent } from './footercer/footercer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarcerComponent,
    FootercerComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
