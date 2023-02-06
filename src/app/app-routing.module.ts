import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSignUpComponent } from './models/pages/email-sign-up/email-sign-up.component';
import { SignUpComponent } from './models/pages/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:SignUpComponent},
  {path:'email-sign-up',component:EmailSignUpComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
