// import { state } from '@angular/animations';
// import { Component } from '@angular/core';
// import { last } from 'rxjs';
// import { MessagesErviceService } from '../messageSerice/messages-ervice.service';

// @Component({
//   selector: 'app-left-slide-window-comp',
//   templateUrl: './left-slide-window-comp.component.html',
//   styleUrls: ['./left-slide-window-comp.component.css'],
//   providers: [
//     MessagesErviceService
//   ]
// })
// export class LeftSlideWindowCompComponent {
//   profileImg: string = '../../assets/user-large.png';
//   messageImg: string = '../../assets/message-large.png';
//   toggleImg: string = '../../assets/toggle-large.png';
//   searchImg: string = '../../assets/search-black-small.png';
//   leftLastTime: string = '';
//   leftLastMsg: object[] = [];

// //this is local variable for contact and messages
//   Localcontact: [] = [];  
//   leftSlideMessageData: [] = [];

//   constructor(private msgService: MessagesErviceService){
// // call to the member function to filter the list and set the needed data.  
//     this.filterContacts();
//   }  

// //member function which will fiter the data and will store needed data only.
//   filterContacts(){
// //storing the service data in local array  
//     let contactArr = JSON.parse(JSON.stringify(this.msgService.contacts));
//     let messageDataLeftSlide = this.msgService.messages;
//     let msgIndex:number = 0;
    
// // let's get each contact from the object.
//     for(let index in contactArr)
//     {
// // check is state is 1 which means the chat has been started previously 
//       if(contactArr[index].state===true)
//       {
//         this.Localcontact = contactArr;
// // now let's extract last sent or recived message and time
// // filter the data based on numbers
//         for(let eachMessage in messageDataLeftSlide)
//         {
// //filter if chat initiated or not
//           if(messageDataLeftSlide[eachMessage].phone==contactArr[index].phone)
//           {
//   // get the sent message list
//             let sentMsgList:object = messageDataLeftSlide[eachMessage].sent;
//   //get the last message index
//             let lastSentMsgNo:number =Object.keys(sentMsgList).length-1;
//   //get the time of last message
//             let lastMsgSentTime:string = Object.values(sentMsgList)[lastSentMsgNo].time;

//   //now get the recived message list
//             let recivedMsgList:object = messageDataLeftSlide[eachMessage].recived;
//   //get the last message index
//             let lastRecivedMsgNo:number =Object.keys(recivedMsgList).length-1;
//   //get the time of last message
//             let lastMsgRecivedTime:string = Object.values(recivedMsgList)[lastRecivedMsgNo].time;

//   //compare the time which is latest sent or recived
//             if(lastMsgRecivedTime>lastMsgSentTime)
//             {
//               this.leftLastTime = lastMsgRecivedTime;
//               this.leftLastMsg[msgIndex++] = {'phno':messageDataLeftSlide[eachMessage].phone,'msg':Object.values(recivedMsgList)[lastRecivedMsgNo].txt};
//             }
//             else
//             {
//               this.leftLastTime = lastMsgSentTime;
//               this.leftLastMsg[msgIndex++] = {'phno':messageDataLeftSlide[eachMessage].phone,'msg':Object.values(sentMsgList)[lastSentMsgNo].txt};
//             }
//             break;
//           }
//         }
//       }  
//     }
//     // console.log(this.leftLastMsg);
//   }

// //check the profile is there or not 
//   checkProfileImg(profile: number){
//     if(profile==null)
//       return true;
//     else
//       return false;
//   }

// //Assigning the message to the contact
//   lastMessageFun(phone:string){
//     let innerKeys: object[];
//     let allKeys: object[] = Object.values(this.leftLastMsg);
//     for(let eachKey in allKeys)
//     {
//        innerKeys = Object.values(allKeys[eachKey]);
//        if(JSON.stringify(innerKeys[0])==JSON.stringify(phone)){
//          return innerKeys[1];
//        }
//     }
//     return '';
//   }
// }
