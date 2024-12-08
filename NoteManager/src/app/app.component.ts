import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteComponent } from "./note/note.component";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteComponent, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-project';
}
