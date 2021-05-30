import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/models/note.model';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent implements OnInit {
  @Input() note!: Note;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Note>();
  @ViewChild('noteForm', { static: true }) ngForm!: NgForm;

  subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.ngForm.form.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((data) => this.updateNote({ id: this.note.id, ...data }))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateNote(note: Note) {
    this.update.emit(note);
  }

  deleteClick(id: number) {
    this.delete.emit(id);
  }
}
