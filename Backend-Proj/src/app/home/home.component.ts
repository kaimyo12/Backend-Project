import { Component } from '@angular/core';
import { User } from '../../angular-backend/model/user';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'home.html'
})

export class HomeComponent
{
    constructor(private user: User, private router: Router){
    }

    editProfile()
    {
        this.router.navigate(['/profile']);
        //this.user.edit()
    }

    logOut(){
        this.user.logout();
        this.router.navigate(['/login']);
    }

    changePassword(){
        this.router.navigate(['/changepassword']);
    }
}