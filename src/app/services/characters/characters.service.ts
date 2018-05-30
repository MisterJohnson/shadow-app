import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters() {
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
