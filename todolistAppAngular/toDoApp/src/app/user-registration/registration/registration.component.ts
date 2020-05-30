import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators,AbstractControl } from '@angular/forms'

import { ConfirmPasswordValidator } from '../../custom-form-validators/PasswordCnfPasswordMatch.validator';
import { UserServiceService } from '../../Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  files:FileList;
  signupForm :FormGroup;
  warningMessage:string;
  flashMessage:boolean=false;

  getFiles(event){ 
    this.files = event.target.files; 
  }

  /*
  ^ - start of string
  (?=[^A-Z]*[A-Z]) - at least 1 uppercase ASCII letter
  (?=[^a-z]*[a-z]) - at least 1 lowercase ASCII letter
  (?=[^0-9]*[0-9]) - at least 1 ASCII digit
  .{8,} - any 8 or more chars (other than line break chars)
  $ - end of string.
  */
 
  constructor(
    private frmbuilder: FormBuilder,
    private UserService:UserServiceService,
    private route:Router) {
    this.signupForm = frmbuilder.group({
      email:['',[Validators.required,Validators.email]],
      fname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/),Validators.maxLength(15),Validators.minLength(1)]],
      lname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/),Validators.maxLength(15),Validators.minLength(1)]],
      profileImage: [''],
      gender: ['',Validators.required],
      address:['',[Validators.required,Validators.maxLength(25),Validators.minLength(1)]],
      password: ['',[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]],
      cnfPassword: ['',Validators.required]
    },{ validator: ConfirmPasswordValidator.MatchPassword });
   }

  ngOnInit(): void {
  }


  //handles user registration
  registerUser(signupForm:any){

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    const emailId = signupForm.get('email').value;
    const fname = signupForm.get('fname').value;
    const lname = signupForm.get('lname').value;
    const gender = signupForm.get('gender').value;
    const address = signupForm.get('address').value;
    const password = signupForm.get('password').value;
    const filesObj = this.files;


    const userErrorCheck:boolean = this.UserService.registerNewUser(emailId,fname,lname,gender,address,password,filesObj);
    
    if(userErrorCheck == false){
      this.flashMessage=true;
      this.warningMessage="User already exists";
      signupForm.reset();
    }
  }

  //getting signupForm(Reactive form control)
  get f(): any {
    return this.signupForm.controls;
  }

}
