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

//global values
	userMain:string = 'user1';
	messageData: any = {
		"user1": {
			"profileImg": "../assets/profile-pics/profile1.jpg",
			"muted": true,
			"chats": [
				{
					"message": "hi",
					"name": "you",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "how you",
					"name": "johm",
					"time": "9:27AM",
					"color": "#ebc634"
				},
				{
					"message": "hey guyz",
					"name": "max",
					"time": "9:29AM",
					"color": "#34ebe2"
				},
				{
					"message": "some text 1",
					"name": "you",
					"time": "9:25AM",
					"color": "#eb344f"
				},
				{
					"message": "some text 1",
					"name": "abc",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "good night all",
					"name": "akasas",
					"time": "9:05AM",
					"color": "#ebc634"
				}
			]
		},
		"user2": {
			"profileImg": "../assets/profile-pics/profile2.jpg",
			"muted": false,
			"chats": [
				{
					"message": "hi",
					"name": "abhi",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "how you",
					"name": "john1",
					"time": "9:27AM",
					"color": "#ebc634"
				},
				{
					"message": "hey guyz",
					"name": "you",
					"time": "9:29AM",
					"color": "#34ebe2"
				},
				{
					"message": "some text 1",
					"name": "arun1",
					"time": "9:25AM",
					"color": "#eb344f"
				},
				{
					"message": "some text 1",
					"name": "aahi1",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "last message 2",
					"name": "amal1",
					"time": "9:00AM",
					"color": "#ebc634"
				}
			]
		},
		"user3": {
			"profileImg": "../assets/profile-pics/profile3.jpeg",
			"muted": false,
			"chats": [
				{
					"message": "hi",
					"name": "abhi",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "how you",
					"name": "john1",
					"time": "9:27AM",
					"color": "#ebc634"
				},
				{
					"message": "hey guyz",
					"name": "you",
					"time": "9:29AM",
					"color": "#34ebe2"
				},
				{
					"message": "some text 1",
					"name": "arun1",
					"time": "9:25AM",
					"color": "#eb344f"
				},
				{
					"message": "some text 1",
					"name": "aahi1",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "last message 3",
					"name": "amal1",
					"time": "9:15AM",
					"color": "#ebc634"
				}
			]
		},
		"user4": {
			"profileImg": "../assets/profile-pics/profile4.png",
			"muted": true,
			"chats": [
				{
					"message": "hi",
					"name": "abhi",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "how you",
					"name": "john1",
					"time": "9:27AM",
					"color": "#ebc634"
				},
				{
					"message": "hey guyz",
					"name": "you",
					"time": "9:29AM",
					"color": "#34ebe2"
				},
				{
					"message": "some text 1",
					"name": "arun1",
					"time": "9:25AM",
					"color": "#eb344f"
				},
				{
					"message": "some text 1",
					"name": "aahi1",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "last message 4",
					"name": "amal1",
					"time": "10:40AM",
					"color": "#ebc634"
				}
			]
		},
		"user5": {
			"profileImg": "../assets/profile-pics/profile5.jpg",
			"muted": false,
			"chats": [
				{
					"message": "hi",
					"name": "abhi",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "how you",
					"name": "john1",
					"time": "9:27AM",
					"color": "#ebc634"
				},
				{
					"message": "hey guyz",
					"name": "max1",
					"time": "9:29AM",
					"color": "#34ebe2"
				},
				{
					"message": "some text 1",
					"name": "arun1",
					"time": "9:25AM",
					"color": "#eb344f"
				},
				{
					"message": "some text 1",
					"name": "aahi1",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "last message 5",
					"name": "amal1",
					"time": "10:00AM",
					"color": "#ebc634"
				}
			]
		},
		"user6": {
			"profileImg": "../assets/user-large.png",
			"muted": true,
			"chats": [
				{
					"message": "hi",
					"name": "abhi",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "how you",
					"name": "john1",
					"time": "9:27AM",
					"color": "#ebc634"
				},
				{
					"message": "hey guyz",
					"name": "max1",
					"time": "9:29AM",
					"color": "#34ebe2"
				},
				{
					"message": "some text 1",
					"name": "arun1",
					"time": "9:25AM",
					"color": "#eb344f"
				},
				{
					"message": "some text 1",
					"name": "aahi1",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "last message 6",
					"name": "amal1",
					"time": "9:40AM",
					"color": "#ebc634"
				}
			]
		},
		"user7": {
			"profileImg": "../assets/user-large.png",
			"muted": true,
			"chats": [
				{
					"message": "hi",
					"name": "abhi",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "how you",
					"name": "john1",
					"time": "9:27AM",
					"color": "#ebc634"
				},
				{
					"message": "hey guyz",
					"name": "max1",
					"time": "9:29AM",
					"color": "#34ebe2"
				},
				{
					"message": "some text 1",
					"name": "arun1",
					"time": "9:25AM",
					"color": "#eb344f"
				},
				{
					"message": "some text 1",
					"name": "aahi1",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "last message 7",
					"name": "amal1",
					"time": "9:30AM",
					"color": "#ebc634"
				}
			]
		},
		"user8": {
			"profileImg": "../assets/user-large.png",
			"muted": false,
			"chats": [
				{
					"message": "hi",
					"name": "abhi",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "how you",
					"name": "john1",
					"time": "9:27AM",
					"color": "#ebc634"
				},
				{
					"message": "hey guyz",
					"name": "max1",
					"time": "9:29AM",
					"color": "#34ebe2"
				},
				{
					"message": "some text 1",
					"name": "arun1",
					"time": "9:25AM",
					"color": "#eb344f"
				},
				{
					"message": "some text 1",
					"name": "aahi1",
					"time": "9:25AM",
					"color": "#34eb8c"
				},
				{
					"message": "last message 8",
					"name": "amal1",
					"time": "9:00AM",
					"color": "#ebc634"
				}
			]
		},
		"keys": [
			"user1",
			"user2",
			"user3",
			"user4",
			"user5",
			"user6",
			"user7",
			"user8"
		]
	}

//function to change the user name
	changeUser(userSent:string){
		this.userMain = userSent;
	}

// function will add the messages to the JSON list
	addChatFun(currentMessage:any){
		let messageToInsert:object = {
			"message":currentMessage[0],
			"name": "you",
			"time": currentMessage[2],
			"color": currentMessage[3]
		};
		
		let userIndex = currentMessage[1];
		this.messageData[userIndex]['chats'].push(messageToInsert);
	}
}
