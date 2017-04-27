import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../angular-backend/model/user';
import { Router } from '@angular/router'

@Component({
    selector: 'login-form',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginComponent
{

    loginForm: FormGroup;

    constructor(private _fb : FormBuilder, private user: User, private router: Router){
        this.createForm();
        if(this.user.logged){
            this.router.navigate(['/home']);
        }
    }

    createForm()
    {
        this.loginForm = this._fb.group({
            id: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(){
       this.user.login(this.loginForm.value)
       .subscribe((res)=> {
            alert("Logged-in");
            console.log(res.data);
            console.log(this.user.getSessionId());
            console.log(this.user.logged);
            this.router.navigate(['/home']);
            
       },
       err => {
          // let error = this.user.errorResponse(err).message;
          if(err.code == -40102)
          {
           alert("User not existing");
          }
          else if(err.code == -40109)
          {
            alert("Wrong Password");
          }
       }
       )
    }

    register(){
        this.router.navigate(['/register']);
    }
}