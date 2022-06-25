import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesErviceService {
// this is the list of the contact to the user
  contacts = [
// every contact has main index as 0-n numbers
    {
// every contact has number, name, state[is this chat initiated or not], profile picture url
      phone:'9449701958',
      name:'Ramesh',
      state:0,
      profile:null
    },
    {
      phone:'8861681649',
      name:'Rahul',
      state:1,
      profile:'../assets/profile-pics/profile1.jpg'
    },
    {
      phone:'7411193649',
      name:'Chetan',
      state:1,
      profile:null
    },
    {
      phone:'9825673875',
      name:'Suman',
      state:1,
      profile:null
    },
    {
      phone:'8876725364',
      name:'Sheetal',
      state:1,
      profile:null
    },
    {
      phone:'9449868726',
      name:'Sagar',
      state:1,
      profile:'../assets/profile-pics/profile2.jpg'
    },
    {
      phone:'7111897654',
      name:'Simran',
      state:1,
      profile:'../assets/profile-pics/profile3.jpeg'
    },
    {
      phone:'9987095432',
      name:'Kamal',
      state:0,
      profile:null
    },
    {
      phone:'9879876546',
      name:'Karan',
      state:1,
      profile:null
    },
    {
      phone:'7869876541',
      name:'Ramesh',
      state:1,
      profile:'../assets/profile-pics/profile4.png'
    },
    {
      phone:'6678654390',
      name:'Kumar',
      state:1,
      profile:'../assets/profile-pics/profile5.jpg'
    },
    {
      phone:'8760985432',
      name:'Ramesh',
      state:1,
      profile:null
    },
    {
      phone:'8889876543',
      name:'Ramesh K',
      state:0,
      profile:null
    },
    {
      phone:'6698760987',
      name:'Hinna',
      state:1,
      profile:null
    },
  ]
}
