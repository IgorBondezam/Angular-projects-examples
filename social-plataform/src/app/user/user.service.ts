import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {i: 1, name: "John"},
    {i: 2, name: "Maria"},
  ]

  constructor() { }

  getUsers(): Observable<any> {
    return of(this.users);
  }
}
