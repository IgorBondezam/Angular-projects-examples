import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BookComponent} from "./book.component";



@NgModule({
  declarations: [
    BookComponent
  ],
  exports: [
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookModule { }
