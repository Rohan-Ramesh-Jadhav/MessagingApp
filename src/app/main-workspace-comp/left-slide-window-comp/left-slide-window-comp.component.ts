import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { MessagesErviceService } from '../messageSerice/messages-ervice.service';

@Component({
  selector: 'app-left-slide-window-comp',
  templateUrl: './left-slide-window-comp.component.html',
  styleUrls: ['./left-slide-window-comp.component.css'],
  providers: [
    MessagesErviceService
  ]
})
export class LeftSlideWindowCompComponent {
  profileImg: string = '../../assets/user-large.png';
  messageImg: string = '../../assets/message-large.png';
  toggleImg: string = '../../assets/toggle-large.png';
  searchImg: string = '../../assets/search-black-small.png';

  //this is local variable for contact
  Localcontact: [] = [];  
  constructor(private msgService: MessagesErviceService){
  // call to the member function to filter the list and set the needed data.  
    this.filterContacts();
  }  

  //member function which will fiter the data and will store needed data only.
  filterContacts(){
  //storing the service data in local array  
    let contactArr = JSON.parse(JSON.stringify(this.msgService.contacts));
  // let's get each contact from the object.
    for(let index in contactArr)
    {
  // check is state is 1 which means the chat has been started previously    
      if(contactArr[index].state==1)
      {
        this.Localcontact = contactArr;
        //console.log(contactArr[index])
      }
    }
  }

  //check the profile is there or not 
  checkProfileImg(profile: number){
    if(profile==null)
      return true;
    else
      return false;
  }
}
