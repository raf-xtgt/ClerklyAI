import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatMsgInputComponent } from './chat-msg-input.component';

describe('ChatMsgInputComponent', () => {
  let component: ChatMsgInputComponent;
  let fixture: ComponentFixture<ChatMsgInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMsgInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatMsgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
