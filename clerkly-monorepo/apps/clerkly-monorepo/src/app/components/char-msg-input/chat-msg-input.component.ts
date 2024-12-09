import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-chat-msg-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-msg-input.component.html',
  styleUrl: './chat-msg-input.component.css',
})
export class ChatMsgInputComponent {
  newMessage: string = '';

  @Output() sendMessageEvent = new EventEmitter<string>();

  sendMessage() {
    if (this.newMessage.trim()) {
      this.sendMessageEvent.emit(this.newMessage);
      this.newMessage = '';
    }
  }
}
