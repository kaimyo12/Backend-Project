import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../angular-backend/model/user';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { File } from '../../angular-backend/model/file';

@Component({
    templateUrl: './user-profile.html',
    styleUrls: ['./register.css']
})

export class ProfileComponent implements OnInit{

    profileForm: FormGroup;
    
    userData = this.user.data();
    primary_photo_idx;

    name: string = this.user.info.name;
    email: string = this.user.info.email;

    constructor(private _fb : FormBuilder, private user: User, 
                private loc: Location, private router: Router,
                private file: File){

        this.createForm();
        console.log(this.user.logged);
       this.getPic();
    }

    ngOnInit(){
        
    }

    createForm(){
        this.profileForm = this._fb.group({
            name: [this.name, Validators.required],
            email: [this.email, Validators.required],
        })
    }

    goBack(){
        this.loc.back();
    }

    update(){
        this.user.edit(this.profileForm.value)
        .subscribe((res) => {
            this.name = res.data.name;
            this.email = res.data.email;
        })
        alert("Succesfully updated!");
        this.router.navigate(['/home']);
    } 

    getPic(){
        this.userData.subscribe((res)=>{
            this.primary_photo_idx = res.data.user.primary_photo.idx;
            console.log("pp:", this.primary_photo_idx);
        })
    }
}