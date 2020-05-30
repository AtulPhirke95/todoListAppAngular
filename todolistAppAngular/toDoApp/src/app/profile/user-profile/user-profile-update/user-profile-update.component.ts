import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-profile-update',
  templateUrl: './user-profile-update.component.html',
  styleUrls: ['./user-profile-update.component.css']
})
export class UserProfileUpdateComponent implements OnInit {

  files:FileList;
  updatedField:string | FileList;
  fieldToUpdate:string;
  warningMessage:string;
  flashMessage:boolean=false;

  getFiles(event){ 
    this.updatedField = event.target.files; 
  }

  constructor(private route:Router,
    private activeRoutes:ActivatedRoute,
    private UserService:UserServiceService) { }

  ngOnInit(): void {
    this.activeRoutes.params.subscribe(params=>{
        this.fieldToUpdate = params['field']
    })
  }

  updateFields(updatedField,field){
    if(updatedField == undefined || updatedField == ""){
      this.warningMessage = "Please select or enter value for " + field;
      this.flashMessage = true;
      return;
    }else{
      this.UserService.updateUserProfile(updatedField,field);
    }

  }

  cancelUpdate(){
    this.route.navigate(['../user-profile'])
  }

}
