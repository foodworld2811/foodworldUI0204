import { ChangeDetectorRef, Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeService } from './services/home.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Rest-App';
  isAuthenticated:boolean = false;
  constructor( private authService:AuthService){
  }
 
  ngOnInit(){
    this.authService.isAuthenticated().subscribe((valid)=>{
      this.isAuthenticated = valid;
      
    })
  }
    
    
}
