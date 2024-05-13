import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})
export class MessageEditComponent {
  @ViewChild('subjectInput') subjectInput: ElementRef;
  @ViewChild('msgTextInput') msgTextInput: ElementRef;

  addMessageEvent = new EventEmitter<Message>();
  currentSender: string;

  constructor() {}

  onSendMessage() {
    const subjectValue: string = this.subjectInput.nativeElement.value;
    const msgTextValue: string = this.msgTextInput.nativeElement.value;

    const newMessage: Message = {
      id: 1,
      sender: this.currentSender,
      subject: subjectValue,
      msgText: msgTextValue,
    };

    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
