import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.css',
  imports: [CommonModule, FormsModule],

})
export class ChatBubbleComponent {
  @Input() message: { text: string; isUser: boolean } = { text: '', isUser: false };
}
