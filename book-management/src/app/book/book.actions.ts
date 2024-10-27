import {createAction, props} from "@ngrx/store";
import {Book} from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSucess = createAction('[Book] Added Book Sucecessfully', props<Book>());
export const AddBookFailure = createAction('[Book] Added Book Failure', props<{error: any}>());


export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());
