import { Injectable, signal } from '@angular/core';
import { async, map, Observable } from 'rxjs';
import { Character } from '../../classes/Character';
import { HttpClient } from '@angular/common/http';
import { BuilderService } from '../builder/builder';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  public character = signal<Character>(null);

  constructor(
    private http: HttpClient,
    private builderSrv: BuilderService
  ) { }

  public getCharacter = ():Observable<Character> => {
    return this.http.get<Character>('https://rickandmortyapi.com/api/character').pipe(
      map((response: any) => this.builderSrv.bulderCharacterclass(response))
    )
  } 
  
  public getCharacterForName = (name: string): Observable<Character> => {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character?name=${name}`).pipe(
      map((response: any) => this.builderSrv.bulderCharacterclass(response))
    )
  }
}

