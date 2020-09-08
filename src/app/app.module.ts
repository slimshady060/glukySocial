import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiDummyInterceptor } from './interceptors/api-dummy.interceptor';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiDummyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
