import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../angular-backend/model/user';
import { Location } from '@angular/common';

@Component({
    templateUrl: './user-profile.html'
})

export class ProfileComponent{

    profileForm: FormGroup;

    constructor(private _fb : FormBuilder, private user: User, private loc: Location){
        this.createForm();
    }

    createForm(){
        this.profileForm = this._fb.group({
            name: '',
            gender: '',
            email: ['', Validators.required],
        })
    }

    goBack(){
        this.loc.back();
    }
}