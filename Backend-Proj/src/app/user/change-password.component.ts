import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../angular-backend/model/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    templateUrl: './change-password.html'
})

export class ChangePasswordComponent{

    changePasswordForm: FormGroup;

    constructor(
        private router: Router,
        private user : User,
        private _fb : FormBuilder,
        private loc: Location
    ){
        this.createForm();
    }

    createForm(){
        this.changePasswordForm = this._fb.group({
            oldpassword: '',
            newpassword: ''
        })        
    }

    goBack(){
        this.loc.back();
    }
}