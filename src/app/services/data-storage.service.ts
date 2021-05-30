import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private noteSubject = new BehaviorSubject<Note[]>([]);
  notes$: Observable<Note[]> = this.noteSubject.asObservable();
  constructor() {}

  fetchFromStorage() {
    console.log('fetching from storage');
    const noteStorage = window.localStorage.getItem('notes');
    if (!noteStorage) {
      console.log('No notes in storage');
      return;
    }
    this.noteSubject.next(JSON.parse(noteStorage));
  }

  addNote(note: Note) {
    const currentNotes = this.noteSubject.getValue();
    const newNotes = [...currentNotes, note];
    this.noteSubject.next(newNotes);
    this.updateLocalStorage(newNotes);
  }

  deleteNote(id: number) {
    const currentNotes = this.noteSubject.getValue();
    const filteredNotes = currentNotes.filter((n) => n.id !== id);
    this.noteSubject.next(filteredNotes);
    this.updateLocalStorage(filteredNotes);
  }

  updateNote(note: Note) {
    const currentNotes = this.noteSubject.getValue();
    const noteIdx = currentNotes.findIndex((n) => n.id === note.id);
    currentNotes.splice(noteIdx, 1, note);
    this.noteSubject.next(currentNotes);
    this.updateLocalStorage(currentNotes);
  }

  updateLocalStorage(newNotes: Note[]) {
    window.localStorage.setItem('notes', JSON.stringify(newNotes));
    console.log(window.localStorage);
  }
}
