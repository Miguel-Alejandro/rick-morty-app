import { Injectable } from '@angular/core';
import { Character, CharacterInfo, CharacterLocation, CharacterResult } from '../../classes/Character';
import { Builder } from 'builder-pattern';


@Injectable({
  providedIn: 'root',
})
export class BuilderService {

  constructor() {}


  //CHARACTER BUILDERS
  public bulderCharacterclass = (response: any): Character => {
    return Builder<Character>()
      .info(response.info)
      .results(response.results)
      .build();
  } 

  public buildCharacterInfoClass = (response: any): CharacterInfo => {
    return Builder<CharacterInfo>()
      .count(response.count)
      .pages(response.pages)
      .next(response.next)
      .prev(response.prev)
      .build();
  }

  public buildCharacterResultClass = (response:any): CharacterResult => {
    return Builder<CharacterResult>()
      .id(response.id)
      .name(response.name)
      .status(response.status)
      .species(response.species)
      .type(response.type)
      .gender(response.gender)
      .origin(response.origin)
      .location(response.location)
      .image(response.image)
      .episode(response.episode)
      .url(response.url)
      .created(response.created)
      .build();
  }

  public buildLocationClass = (response: any): CharacterLocation => {
    return Builder<CharacterLocation>()
      .name(response.name)
      .url(response.url)
      .build();
  }
  
}
