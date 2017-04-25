import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../angular-backend/model/user';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'user-component',
    templateUrl: './user.html'
})

export class UserComponent{

    userForm: FormGroup;

    constructor(private _fb : FormBuilder, private user: User, private loc: Location, private router:Router){
        this.createForm();
    }

    createForm(){
        this.userForm = this._fb.group({
            id: ['', Validators.required],
            password: ['', Validators.required],
            name: '',
            gender: '',
            email: ['', Validators.required],
        })
    }

    registerUser()
    {
        this.user.register(this.userForm.value)
       //.subscribe((res) => this.userForm.value = res)
      //  console.log(this.userForm.value);
      alert("Registered succesfully!");
      this.router.navigate(['/home']);
    }

    goBack(){
        this.loc.back();
    }
}