import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  }

  addNewNote() {
    const newNote = new Note();
    console.log({ newNote });
    this.dataStorage.addNote(newNote);
  }

  deleteNote(id: number) {
    console.log(id);
    this.dataStorage.deleteNote(id);
  }
}
