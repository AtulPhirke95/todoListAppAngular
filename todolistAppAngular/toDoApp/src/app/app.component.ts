import { Component, HostListener } from '@angular/core';
import { UserServiceService } from './Services/user-service.service';
import { User } from './user.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoApp';
  
  constructor() { 
    
   }

  ngOnInit(): void {
    
  }


}
