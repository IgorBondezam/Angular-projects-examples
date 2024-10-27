import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookListComponent} from "./book-list/book-list.component";


const routes: Routes = [
  {path:"", component:BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
