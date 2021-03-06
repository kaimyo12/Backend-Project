import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './user-profile';
import { ChangePasswordComponent } from './change-password.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    UserRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
