import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
