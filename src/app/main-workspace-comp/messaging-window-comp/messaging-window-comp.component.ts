import { Component, Input } from '@angular/core';
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
		setInterval(()=>{this.messagesFun();},1000);
	}
	//image urls
	profileImg: string = '../../assets/user-large.png';
	fileAttachImg: string = '../../assets/attach-large.png';
	toggleImg: string = '../../assets/toggle-large.png';
	searchImg: string = '../../assets/search-gray-large.png';
	emojiImg: string = '../../assets/emoji-large.png';
	micImg: string = '../../assets/mic-large.png';
	sentImg: string = '../../assets/sent-large.png';

	//local variables and arrays/objects
	localMessage: [] = [];
	groupInfoArr: string = '';
	groupMembers:any;
	currentChatTime:Date=new Date();

	@Input() userChat = '';
	//function for message
	messagesFun(){
		let allKeys:string[] = [];
		let allvalues:object[] = [];
		
		allKeys = Object.keys(this.msgService.messageData);
		allvalues = Object.values(this.msgService.messageData);
	//initiate the message
		for(let eachKey in allKeys)
		{
		if(allKeys[eachKey]==this.userChat)
		{
			let innerData:object = allvalues[eachKey]
			this.localMessage = Object.values(innerData)[2];
		}
		}
	}
	// function to set group profile
	getGroupProfile(){
		let key:number = (Object.keys(this.msgService.messageData).indexOf(this.userChat));
		return this.msgService.messageData[this.userChat]['profileImg'];
	}
	// profile name/ group name
	proGroupName(){
		return this.userChat;
	}
	// group information
	groupInfo(){
		this.groupInfoArr = '';
		for(let eachChat in this.localMessage)
		{
		this.groupMembers = (Object.values(this.localMessage[eachChat])[1]);
		if(this.groupInfoArr.indexOf(this.groupMembers)==-1 || this.groupInfoArr.indexOf(this.groupMembers)==0)
		{
			this.groupInfoArr = this.groupInfoArr + Object.values(this.localMessage[eachChat])[1] + ', ';
		}
		}
		return this.groupInfoArr;
	}
	// function to check the user
	messageUserCheck(eachMessage:object){
		if(Object.values(eachMessage)[1]=='you'){
		return true;
		}
		else
		{
		return false;
		}
	}
	// background color to the cards 
	bgCardColor(eachMessage:object){
		return Object.values(eachMessage)[3];
	}
	//name function willset the name for each chat [who sent the message]
	nameFun(eachMessage:object){
		return Object.values(eachMessage)[1];
	}
	//message sent by each chatter function
	messageSent(eachMessage:object){
		return Object.values(eachMessage)[0];
	}
	//time of chat sent or made
	timeSent(eachMessage:object){
		return Object.values(eachMessage)[2];
	}

	//new text must be added to the message list
	addText(txt:string)
	{
		this.groupInfoArr = '';
		console.log(document.getElementsByName('textInput'))
		let setOfChar:string = 'abcdef1234567890';
		let colorCode = '#'+(setOfChar.split('').sort(() => Math.random() - 0.5).join('')).substring(0,6)
		let chatTime = this.currentChatTime.getHours()+':'+this.currentChatTime.getMinutes();
		let textData:any[] = [txt, this.userChat, chatTime, colorCode];
		this.msgService.addChatFun(textData);
	}
}
