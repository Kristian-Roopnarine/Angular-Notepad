export class Note {
  id: number;
  title: string;
  content: string;
  dateAdded: Date;
  lastUpdated: Date;
  constructor(title: string, content: string, id: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.dateAdded = new Date();
    this.lastUpdated = new Date();
  }
}
