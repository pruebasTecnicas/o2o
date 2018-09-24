import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  options = {
    withCredentials: true
  };

  baseURL = 'http://localhost:3000';
  searchWord: String = '';

  constructor(public http: Http) { }

  getRecipes(): any {
    return this.http.get(this.baseURL, this.options).pipe(
      map(res => {
        return res.json();
      })
    );
  }

}
