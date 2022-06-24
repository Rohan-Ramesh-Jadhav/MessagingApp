import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWorkspaceCompComponent } from './main-workspace-comp/main-workspace-comp.component';
import { LeftSlideWindowCompComponent } from './main-workspace-comp/left-slide-window-comp/left-slide-window-comp.component';
import { MessagingWindowCompComponent } from './main-workspace-comp/messaging-window-comp/messaging-window-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWorkspaceCompComponent,
    LeftSlideWindowCompComponent,
    MessagingWindowCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
