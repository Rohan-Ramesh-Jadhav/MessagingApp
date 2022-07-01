import { Component, Input, ViewChild, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-messaging-window-comp',
  templateUrl: './messaging-window-comp.component.html',
  styleUrls: ['./messaging-window-comp.component.css'],
})
export class MessagingWindowCompComponent implements DoCheck{
	@ViewChild('messageContainer', {static: true}) scrollEle: any;
	//local variables and arrays/objects
	localMessage: any[] = [];
	groupInfoArr: string = '';
	groupMembers:any;
	currentChatTime:Date=new Date();

	constructor() { 
		
	}

	ngDoCheck(): void {
		//The below code will scroll down as any message is sent and will be checked based on every change.
		this.scrollEle.nativeElement.scrollTop = this.scrollEle.nativeElement.scrollHeight;
		setTimeout(()=>{this.messagesFun();},100);
	}

	//image urls
	@Input() profileImg: string = '';
	fileAttachImg: string = '../../assets/attach-large.png';
	@Input() toggleImg: string = '';
	searchImg: string = '../../assets/search-gray-large.png';
	emojiImg: string = '../../assets/emoji-large.png';
	micImg: string = '../../assets/mic-large.png';
	sentImg: string = '../../assets/sent-large.png';

	@Input() userChat = '';
	@Input() jsonData:any = '';
	@Output() newMessage = new EventEmitter<object>();
	//function for message
	messagesFun(){
		let allKeys:string[] = [];
		let allvalues:object[] = [];
		
		allKeys = Object.keys(this.jsonData);
		allvalues = Object.values(this.jsonData);
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
		let key:number = (Object.keys(this.jsonData).indexOf(this.userChat));
		return this.jsonData[this.userChat]['profileImg'];
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
			if(this.groupInfoArr.indexOf(this.groupMembers)==-1 && this.groupMembers.match('you')==null)
			{
				this.groupInfoArr = this.groupInfoArr + Object.values(this.localMessage[eachChat])[1] + ', ';
			}
		}
		return this.groupInfoArr;
	}
	
	//new text must be added to the message list
	addText(txt:string)
	{
		for(let eachChar in txt.split('')){
			console.log(txt[eachChar])
			if(txt[eachChar]!= '' && txt[eachChar]!= ' ')
			{
				this.groupInfoArr = '';
				let setOfChar:string = 'abcdef1234567890';
				let colorCode = '#'+(setOfChar.split('').sort(() => Math.random() - 0.5).join('')).substring(0,6);
				let chatTime:string;
				if(this.currentChatTime.getHours()>12)
				{
					chatTime = this.currentChatTime.getHours()-12+':'+this.currentChatTime.getMinutes()+'PM';
				}
				else
				{
					chatTime = this.currentChatTime.getHours()+':'+this.currentChatTime.getMinutes()+'AM';
				}
				let textData:any[] = [txt, this.userChat, chatTime, colorCode];
				this.newMessage.emit(textData);
				break
			}
		}
	}
}
