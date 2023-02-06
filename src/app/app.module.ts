import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './models/pages/sign-up/sign-up.component';
import { EmailSignUpComponent } from './models/pages/email-sign-up/email-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    EmailSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
