import { Component, OnInit, signal } from '@angular/core';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Character } from '../../components/character/character';
import { CharacterService } from '../../services/character/character-service';
import { firstValueFrom } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  public goToFavorites = (): void => {
    this.router.navigate(["/favorites"])
  }

  private getCharacters = async (): Promise<void> => {
    this.characterSrv.character.set(await firstValueFrom(this.characterSrv.getCharacter()));
  }

  get getCharacter(){
    return this.characterSrv.character();
  }

}
