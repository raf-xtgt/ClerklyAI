import { Component } from '@angular/core';
import { ChatBubbleComponent } from '../chat-bubble/chat-bubble.component';
import { ChatMsgInputComponent } from '../char-msg-input/chat-msg-input.component';
import { NgFor, CommonModule } from '@angular/common';


@Component({
  selector: 'app-new-chat',
  imports: [CommonModule, NgFor, ChatBubbleComponent, ChatMsgInputComponent],
  templateUrl: './new-chat.component.html',
  styleUrl: './new-chat.component.css',
})
export class NewChatComponent {

  messages = [
    { text: 'Hello! How can I help you?', isUser: false },
    { text: 'I need some assistance with my account.', isUser: true },
  ];
  newMessage = '';

  handleSendMessage(message: string) {
    this.messages.push({ text: message, isUser: true });

    // Simulate a bot response
    setTimeout(() => {
      this.messages.push({ text: 'Thank you for reaching out. I’ll assist you.', isUser: false });
    }, 1000);
  }
}
