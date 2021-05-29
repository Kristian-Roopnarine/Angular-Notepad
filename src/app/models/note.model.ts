export class Note {
  title: string;
  content: string;
  dateAdded: Date;
  lastUpdated: Date;
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.dateAdded = new Date();
    this.lastUpdated = new Date();
  }
}
