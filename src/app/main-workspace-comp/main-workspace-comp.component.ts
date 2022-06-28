import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-workspace-comp',
  templateUrl: './main-workspace-comp.component.html',
  styleUrls: ['./main-workspace-comp.component.css']
})
export class MainWorkspaceCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

//global var
  userMain:string = 'user1';
//function to change the user name
  changeUser(userSent:string){
    this.userMain = userSent;
  }  
}
