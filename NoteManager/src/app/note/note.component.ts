import { Component, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoteStore } from '../../store/note.store';
import { MatListModule } from '@angular/material/list';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatButtonModule, CommonModule, ReactiveFormsModule, FormsModule, MatTooltipModule, MatMenuModule, MatButtonModule],
})
export class NoteComponent {
  selectedIcon: string = '';
  text: string = '';
  isfocused: boolean = false;
  task_list: any = [];
  username: string = 'John Doe';
  noteStore = Inject(NoteStore);
  hoverIndex = -1;


  buttons = [
    { name: 'message', icon: 'sms', message: "added a note to" },
    { name: 'call', icon: 'call', message: "had a call with" },
    { name: 'coffee', icon: 'coffee', message: "had a coffee with" },
    { name: 'beer', icon: 'sports_bar', message: "had a beer with" },
    { name: 'meeting', icon: 'person', message: "had a meeting with" },
  ];

  timeAgo: TimeAgo;

  constructor() {
    TimeAgo.addLocale(en); // Register the locale
    this.timeAgo = new TimeAgo('en-US'); // Initialize with the locale
  }

  ngOnInit() {
    this.task_list = JSON.parse(localStorage.getItem('task_list') || '[]');
    //match task_list.note_type with buttons.icon and set the selectedIcon and message in task_list
    this.task_list.forEach((task: any) => {
      const button = this.buttons.find((button) => button.icon === task.note_type);
      task.message = button?.message;
      task.icon = button?.icon;
    });
    console.log('this.task_list: ', this.task_list);
  }


  changeIconColor(event: string) {
    console.log('event: ', event);
    this.selectedIcon = event;
  }

  onFocus() {
    this.isfocused = true;
  }

  onBlur() {
    // this.isfocused = false;
  }

  submitTask() {
    if (!this.text || !this.selectedIcon) return;
    const curernt_date = new Date();

    const task = {
      note_type: this.selectedIcon,
      note_text: this.text,
      note_time: curernt_date,
      note_username: this.username,
      message: this.buttons.find((button) => button.icon === this.selectedIcon)?.message,
      icon: this.buttons.find((button) => button.icon === this.selectedIcon)?.icon,
    }
    this.task_list = [task, ...this.task_list];

    localStorage.setItem('task_list', JSON.stringify(this.task_list));
    this.isfocused = false;
    this.text = '';
    this.selectedIcon = '';
  }

  deleteTask(index: number) {
    this.task_list.splice(index, 1);
    localStorage.setItem('task_list', JSON.stringify(this.task_list));
  }

  getDaysCount(date: string): string {
    return this.timeAgo.format(new Date(date), 'mini');
  }


}
