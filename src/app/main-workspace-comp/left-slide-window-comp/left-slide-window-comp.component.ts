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
  muteIcon: string = '../../assets/mute-small.png';
  leftLastTime: string = '';
  leftLastMsg: object[] = [];

//this is local variable for contact and messages
  Localcontact: any;  
  leftSlideMessageData: string[] = [];

  constructor(private msgService: MessagesErviceService){
// call to the member function to filter the list and set the needed data.  
    this.filterContacts();
  }  

//member function which will initiate the population of data.
  filterContacts(){
    let allValues:string[] = Object.values(this.msgService.messageData);
    this.Localcontact = allValues[allValues.length-1];
  }
// function will set profile pic to the user
  profilePic(user:any){
    let allKeys:string[] = [];
    let allvalues:object[] = [];
    let innerKeys:object[] = [];

    allKeys = Object.keys(this.msgService.messageData);
    allvalues = Object.values(this.msgService.messageData);

    for(let eachKey in allKeys)
    {
      if(allKeys[eachKey]==user)
      {
        let innerData:object = allvalues[eachKey]
        return Object.values(innerData)[0];
      }
    }
  }
  // function to check is profile pic is set to default or an actula image
  checkDefaultImg(user:string){
    let allKeys:string[] = [];
    let allvalues:object[] = [];
    let innerKeys:object[] = [];

    allKeys = Object.keys(this.msgService.messageData);
    allvalues = Object.values(this.msgService.messageData);

    for(let eachKey in allKeys)
    {
      if(allKeys[eachKey]==user)
      {
        let innerData:object = allvalues[eachKey]
        if(Object.values(innerData)[0]==='../assets/user-large.png'){
          return true;
        }
        else
        {
          return false;
        }
      }
    }
    return true;
  }

// function to set last message and time
  lastMessageFun(user:string){
    let allKeys:string[] = [];
    let allvalues:object[] = [];
    let innerKeys:object[] = [];

    allKeys = Object.keys(this.msgService.messageData);
    allvalues = Object.values(this.msgService.messageData);

    for(let eachKey in allKeys)
    {
      if(allKeys[eachKey]==user)
      {
        let innerData:object = allvalues[eachKey]
        let allData:object = Object.values(innerData)[2][Object.values(innerData)[2].length-1];
        let MessageData = Object.values(allData);
        return (MessageData[1]+': '+MessageData[0]);
      }
    }
    return 'message';
  }
//last updated time for left slide
  lastUpdateTime(user:string)
  {
    let allKeys:string[] = [];
    let allvalues:object[] = [];
    let innerKeys:object[] = [];

    allKeys = Object.keys(this.msgService.messageData);
    allvalues = Object.values(this.msgService.messageData);

    for(let eachKey in allKeys)
    {
      if(allKeys[eachKey]==user)
      {
        let innerData:object = allvalues[eachKey]
        let allData:object = Object.values(innerData)[2][Object.values(innerData)[2].length-1];
        let MessageData = Object.values(allData);
        return MessageData[2];
      }
    }
  }
// function to check mutted or not
  checkMute(user:string)
  {
    let allKeys:string[] = [];
    let allvalues:object[] = [];
    let innerKeys:object[] = [];

    allKeys = Object.keys(this.msgService.messageData);
    allvalues = Object.values(this.msgService.messageData);

    for(let eachKey in allKeys)
    {
      if(allKeys[eachKey]==user)
      {
        let innerData:object = allvalues[eachKey]
        return Object.values(innerData)[1];
      }
    }
  }
}
