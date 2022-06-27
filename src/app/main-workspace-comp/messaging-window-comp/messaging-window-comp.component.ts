import { Component } from '@angular/core';
import { MessagesErviceService } from '../messageSerice/messages-ervice.service';

@Component({
  selector: 'app-messaging-window-comp',
  templateUrl: './messaging-window-comp.component.html',
  styleUrls: ['./messaging-window-comp.component.css'],
  providers: [
    MessagesErviceService
  ]
})
export class MessagingWindowCompComponent {

  constructor(private msgService:MessagesErviceService) { 
    this.messagesFun('init')
  }
//image urls
  profileImg: string = '../../assets/user-large.png';
  fileAttachImg: string = '../../assets/attach-large.png';
  toggleImg: string = '../../assets/toggle-large.png';
  searchImg: string = '../../assets/search-gray-large.png';

//local variables and arrays/objects
  localMessage: [] = []
//function for message
messagesFun(flag:string){
  let allKeys:string[] = [];
  let allvalues:object[] = [];
  let innerKeys:object[] = [];

  allKeys = Object.keys(this.msgService.messageData);
  allvalues = Object.values(this.msgService.messageData);
//initiate the message
  if(flag=='init')
  {
    for(let eachKey in allKeys)
    {
      if(allKeys[eachKey]==this.msgService.user)
      {
        let innerData:object = allvalues[eachKey]
        this.localMessage = Object.values(innerData)[2];
      }
    }
  }
  else if(flag=='type')
  {
    for(let eachKey in allKeys)
    {
      if(allKeys[eachKey]==this.msgService.user)
      {
        let innerData:object = allvalues[eachKey]
        let allData:object = Object.values(innerData)[2];
        let innerMsg:object = Object.values(allData);
        console.log(Object.values(Object.values(innerMsg)[0])[1])
        if(Object.values(Object.values(innerMsg)[0])[1]=='you')
        {
          return true;
        }
        else
        {
          return false;
        }
      }
    }
  }
  return true;
}

}
