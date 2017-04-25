import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { ProfileComponent } from './user-profile';
import { ChangePasswordComponent } from './change-password.component';

const userRoutes: Routes = [
    {
        path: 'register', component: UserComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'changepassword', component: ChangePasswordComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule
{

}