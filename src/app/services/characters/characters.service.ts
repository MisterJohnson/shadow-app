import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Character } from '../../shared/models/character-model';


@Injectable()
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): any {
    return this.http.get('/character').map(res => {
        return res;
      });
  }

  /*addCharacters(character: Character) {
    return this.http.post('/character/save').map(res => {
      return res;
    });
  }*/

}
