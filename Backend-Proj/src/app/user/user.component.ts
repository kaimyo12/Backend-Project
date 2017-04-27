import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../angular-backend/model/user';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { File } from '../../angular-backend/model/file';
import 'rxjs/add/operator/debounceTime';
import { _USER_CREATE, _USER_CREATE_RESPONSE } from '../../angular-backend/interface';

@Component({
    selector: 'user-component',
    templateUrl: './user.html',
    styleUrls: ['./register.css']
})

export class UserComponent{

    userForm: FormGroup;
    primary_photo_idx: number;
    error: string;

    constructor(private _fb : FormBuilder, private user: User, private loc: Location, 
                private router:Router, private file: File){
        this.createForm();
    }

    createForm(){
        this.userForm = this._fb.group({
            id: 
            ['', 
              [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
              ]
            ],

            password:          
            ['', 
              [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
              ]
            ],
            name: 
            ['', 
              [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(50)
              ]
            ],
            email: ['', Validators.required],

        })

        this.userForm.valueChanges
        .debounceTime(1000)
      .subscribe(data => this.onValueChanged());
    this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = this.userForm.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '\n';
        }
      }
    }
  }

  formErrors = {
    'id': '',
    'password': '',
    'name': '',
    'email': ''
  };


validationMessages = {
    'id': {
      'required':       'Username is required.',
      'minlength':      'Username must be at least 6 characters long.',
      'maxlength':      'Username must only have 20 maximum characters'
    },
    'password':
    {
      'required':       'Password is required.',
      'minlength' :     'Password must be at least 6 characters long.',
      'maxlength':      'Password must only have 20 maximum characters.',
    },
    'name': {
      'required':       'Name is required.',
      'minlength':      'Name must be at least 2 characters long',
      'maxlength':      'Name has a maximum of 50 characters'
    },
    'email':
    {
      'required':       'Email is required.',
    }
  };


    registerUser(userPic)
    {
    if(confirm("Register?")) 
    {
       let register = <_USER_CREATE> this.userForm.value;
       register.file_hooks = [this.primary_photo_idx];
      this.user.register(register)
      .subscribe((res : _USER_CREATE_RESPONSE)=>
      {

      },
      error =>{
        this.error = error;
      }
      )
      alert("Registered succesfully!");
      this.router.navigate(['/login']);
      console.log(register);
      console.log(this.user.logged);
    } 
  }
  
  onChangePic(userPic){
        let file = userPic.files[0];
        this.file.uploadPrimaryPhoto(file).subscribe((res)=>{
          this.primary_photo_idx = res.data.idx;
        },
        err => {
          this.file.alert(err);
        }
      )
  }

    goBack(){
        this.loc.back();
    }
}