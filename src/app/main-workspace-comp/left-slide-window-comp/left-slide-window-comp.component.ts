import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-left-slide-window-comp',
  templateUrl: './left-slide-window-comp.component.html',
  styleUrls: ['./left-slide-window-comp.component.css'],
})
export class LeftSlideWindowCompComponent implements OnChanges{
  @Input() profileImg:string = '';
  @Input() toggleImg:string = '';
  messageImg: string = '../../assets/message-large.png';
  searchImg: string = '../../assets/search-black-small.png';
  muteIcon: string = '../../assets/mute-small.png';
  leftLastTime: string = '';
  leftLastMsg: object[] = [];

//this is local variable for contact and messages
  Localcontact: any;  
  LocalcontactNew:any;
  leftSlideMessageData: string[] = [];
  @Input() userChat:string='';
  @Output() newUser = new EventEmitter<string>();
  @Input() jsonData:any = '';

  constructor(){
    
  }  

  ngOnChanges(changes: SimpleChanges): void {
    this.filterContacts();
  }

//member function which will initiate the population of data.
  filterContacts(){
    let allValues:string[] = Object.values(this.jsonData);
    this.LocalcontactNew = this.Localcontact = allValues[allValues.length-1];
  }
// function will set profile pic to the user
  profilePic(user:any){
    let allKeys:string[] = [];
    let allvalues:object[] = [];

    allKeys = Object.keys(this.jsonData);
    allvalues = Object.values(this.jsonData);

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

    allKeys = Object.keys(this.jsonData);
    allvalues = Object.values(this.jsonData);

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

    allKeys = Object.keys(this.jsonData);
    allvalues = Object.values(this.jsonData);

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

    allKeys = Object.keys(this.jsonData);
    allvalues = Object.values(this.jsonData);

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

    allKeys = Object.keys(this.jsonData);
    allvalues = Object.values(this.jsonData);

    for(let eachKey in allKeys)
    {
      if(allKeys[eachKey]==user)
      {
        let innerData:object = allvalues[eachKey]
        return Object.values(innerData)[1];
      }
    }
  }
// function to change chat to be showed on message box
  changeChat(eachContact:string){
    this.newUser.emit(eachContact);
  }
//for styling the user
  checkUser(eachContact:string){
    if(this.userChat==eachContact)
    {
      return '#b1aeae30';
    }
    return '';
  }
// function to filter the user based on the search
  	filterUserList(serchVal:string){
      this.Localcontact = this.LocalcontactNew;  
      let TmpLocalcontactNew = [];
      for(let eachUser in this.Localcontact)
      {
        
        let matchString = this.Localcontact[eachUser].substring(0,this.Localcontact[eachUser].length);
        if(matchString.indexOf(serchVal)>=0)
        {
          TmpLocalcontactNew.push(this.Localcontact[eachUser])
        }
      }
      this.Localcontact = TmpLocalcontactNew;
  	}
}
