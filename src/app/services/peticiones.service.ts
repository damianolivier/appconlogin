import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeticionesService {
  public url: string;

  constructor(private _http:HttpClient) { 
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba() {
    return "hola mundo desde el servicio";
  }

  getPosts() {
    return this._http.get(this.url);
  }
}
