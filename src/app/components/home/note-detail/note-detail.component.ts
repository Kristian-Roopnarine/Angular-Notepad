import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  note = new Note('This is a test', 'This is a test note', 1);

  constructor() {}

  ngOnInit(): void {}

  logData(noteData: NgForm) {
    console.log(noteData.form.value);
  }
}
