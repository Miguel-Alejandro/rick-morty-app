import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../../classes/Character';
import { HttpClient } from '@angular/common/http';
import { BuilderService } from '../builder/builder';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  constructor(
    private http: HttpClient,
    private builderSrv: BuilderService
  ) { }

  public character = ():Observable<Character> => {
    return this.http.get<Character>('https://rickandmortyapi.com/api/character').pipe(
      map((response: any) => this.builderSrv.bulderCharacterclass(response))
    )
  }
  
}

