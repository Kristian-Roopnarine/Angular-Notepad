import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  @Input() note!: Note;
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  logData(noteData: NgForm) {
    console.log(noteData.form.value);
  }

  deleteClick(id: number) {
    this.delete.emit(id);
  }
}
