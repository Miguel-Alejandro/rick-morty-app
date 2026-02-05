import { Component, OnInit, signal } from '@angular/core';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Character } from '../../components/character/character';
import { CharacterService } from '../../services/character/character-service';
import { firstValueFrom } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {  ModalsService } from '../../services/modals/modals';
import { CharacterResult } from '../../classes/Character';

@Component({
  selector: 'app-home',
  imports: [
    SearchBar,
    Character,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  constructor(
    private characterSrv: CharacterService,
    private modalSrv: ModalsService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  public openCharacterDetails = (character: CharacterResult) => {
    this.modalSrv.openCharacterDetailsModal(character);
  }

  private getCharacters = async (): Promise<void> => {
    this.characterSrv.character.set(await firstValueFrom(this.characterSrv.getCharacter()));
  }

  get getCharacter(){
    return this.characterSrv.character();
  }

}
