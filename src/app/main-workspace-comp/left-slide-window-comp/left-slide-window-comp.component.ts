import { Component } from '@angular/core';

@Component({
  selector: 'app-left-slide-window-comp',
  templateUrl: './left-slide-window-comp.component.html',
  styleUrls: ['./left-slide-window-comp.component.css']
})
export class LeftSlideWindowCompComponent {
  profileImg: string = '../../assets/user-large.png';
  messageImg: string = '../../assets/message-large.png';
  toggleImg: string = '../../assets/toggle-large.png';
  searchImg: string = '../../assets/search-black-small.png';
}
