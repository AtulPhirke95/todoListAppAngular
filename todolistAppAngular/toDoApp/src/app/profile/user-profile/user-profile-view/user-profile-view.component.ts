import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../../../Services/user-service.service';
import { User } from '../../../user.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.css']
})
export class UserProfileViewComponent implements OnInit {

  user: User

  profilPic:string|ArrayBuffer;
  constructor(private UserService:UserServiceService) { }

  ngOnInit(): void {
    this.user = this.UserService.userProfileView();
    if(this.user.profilePic == ""){
      this.profilPic = "../../assets/user_avatar.png";
    }else{
      this.profilPic = this.user.profilePic;
    }

    
  }

}
