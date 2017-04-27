import { Component } from '@angular/core';
import { User } from '../../angular-backend/model/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: 'home.html',

})

export class HomeComponent
{

    name: string = this.user.info.name ;

    constructor(private user: User, private router: Router){

    }

    editProfile()
    {
        this.router.navigate(['/profile']);
        //this.user.edit()
    }

    logOut(){
    if(confirm("Log-out?")) 
    {
        this.user.logout();
        this.router.navigate(['/login']);
    }
    }

    changePassword()
    {
        this.router.navigate(['/changepassword']);
    }

}