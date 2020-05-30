import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,AfterViewInit {



    
  private sub:Subscription;

  currentLoggedInUserEmailId:string;
  currentLogedInUserFlag:boolean;

  constructor(private UserService:UserServiceService,private elementRef:ElementRef) { 
    this.currentLoggedInUserEmailId=this.UserService.currentLoggedInUser()
    this.currentLogedInUserFlag = this.currentLoggedInUserEmailId ? true:false
    this.sub =this.UserService.getLoggedInName.subscribe(loggedInFlag => {
      this.changeLogInStatus(loggedInFlag)
      console.log(loggedInFlag)
    });
  }



  private changeLogInStatus(loggedInFlag){
    this.currentLogedInUserFlag = loggedInFlag;
    
  }

  ngOnInit(): void {

  }


  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.sub.unsubscribe();
}

}
