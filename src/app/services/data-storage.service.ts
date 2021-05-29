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

  fetchFromStorage(key: string, defaultVal: any) {
    let localStorage = window.localStorage;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(defaultVal));
    }
    return JSON.parse(window.localStorage.getItem('notes')!);
  }

  addNote(note: Note) {
    const currentNotes = this.noteSubject.getValue();
    const newNotes = [...currentNotes, note];
    this.noteSubject.next(newNotes);
  }

  deleteNote(id: number) {
    const currentNotes = this.noteSubject.getValue();
    const filteredNotes = currentNotes.filter((n) => n.id !== id);
    this.noteSubject.next(filteredNotes);
  }
}
