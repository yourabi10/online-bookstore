import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books: Book[];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.listBooks();
  }

  listBooks(){
    this._bookService.getbooks().subscribe(
      data => this.books = data
    )
  }

}
