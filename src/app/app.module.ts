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
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { PersonsComponent } from './persons/persons.component';
import { CardPersonComponent } from './shared/card-person/card-person.component';
import { CardComponent } from './shared/card/card.component';
import { HomeModule } from './home/home.module';
import { MessagesComponent } from './messages/messages.component';
import { MainComponent } from './main/main.component';
import { BaseComponent } from './base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonsComponent,
    CardPersonComponent,
    MessagesComponent,
    MainComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    NgxContentLoadingModule,
    HomeModule,
    ReactiveFormsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiDummyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
