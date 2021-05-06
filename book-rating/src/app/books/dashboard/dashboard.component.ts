import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '111',
    title: 'React',
    description: 'Auch gutes Buch',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQuery',
    description: 'sehr altes Buch',
    rating: 0
  }];

  constructor(br: BookRatingService) {

  }

  doRateDown(book: Book): void {
    console.table(book);
  }

  doRateUp(book: Book): void {
    console.table(book);
  }


}
