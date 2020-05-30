import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-todolist-delete',
  templateUrl: './todolist-delete.component.html',
  styleUrls: ['./todolist-delete.component.css']
})
export class TodolistDeleteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private UserService:UserServiceService 
    ) {}

  nameResolveParam:any;
  nameOfToDoList:string;

  ngOnInit(): void {
    this.nameResolveParam = this.route.snapshot.data['name'];
    if(this.nameResolveParam == false){
      this.router.navigate(['/todolist']);
    }else if(this.nameResolveParam == true){
      this.route.params.subscribe(params=>{
        this.nameOfToDoList = params['name'];
        this.UserService.deleteSingleToDoList(this.nameOfToDoList);
      })
    }
    
  }

}
