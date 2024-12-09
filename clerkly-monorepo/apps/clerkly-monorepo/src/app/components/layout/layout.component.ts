import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NewChatComponent } from '../new-chat/new-chat.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, TopBarComponent, SideBarComponent, NewChatComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
