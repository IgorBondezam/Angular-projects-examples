import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {BookService} from "./book.service";
import * as bookActions from "./book.actions";
import {catchError, map, mergeMap, of} from "rxjs";

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions,
              private bookService: BookService) {
  }

  addBook$ = createEffect(() =>
    this.actions$.pipe(ofType(bookActions.AddBook),
      mergeMap((action) => this.bookService.addBook(action).pipe(
        map(book => bookActions.AddBookSucess(book)),
        catchError((error) => of(bookActions.AddBookFailure({error})))
      ))
    ));

}
