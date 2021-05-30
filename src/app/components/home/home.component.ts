import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from 'src/app/models/note.model';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  notes$!: Observable<Note[]>;
  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {
    this.dataStorage.fetchFromStorage();
    this.notes$ = this.dataStorage.notes$;
    this.notes$.pipe(tap(console.log));
  }

  addNewNote() {
    const newNote = new Note();
    this.dataStorage.addNote(newNote);
  }

  deleteNote(id: number) {
    this.dataStorage.deleteNote(id);
  }

  updateNote(note: Note) {
    this.dataStorage.updateNote(note);
  }
}
