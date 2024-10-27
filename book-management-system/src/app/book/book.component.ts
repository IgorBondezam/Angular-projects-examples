import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  ngOnInit(): void {
    this.books = this.getBooksFromStorage();
  }

  public title: string = '';
  public author: string = '';

  public books: Book[] = []

  public addBook(): void {
    const book: Book =  {
      id: Date.now(),
      title: this.title,
      author: this.author,
    }
    this.books.push(book);
    this.setBooksLocalStorage();
  }

  public removeBook(index: number): void {
    this.books = this.getBooksFromStorage();
    this.books.splice(index, 1);
    this.setBooksLocalStorage();
  }

  private getBooksFromStorage(): Book[] {
    const storageBooks: string | null = localStorage.getItem("books");
    return storageBooks ? JSON.parse(storageBooks) : [];
  }

  private setBooksLocalStorage(): void {
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
