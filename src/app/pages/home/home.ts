import { Component, OnInit, signal } from '@angular/core';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Character } from '../../components/character/character';
import { Character as CharacterClass } from '../../classes/Character';
import { CharacterService } from '../../services/character/character-service';
import { firstValueFrom } from 'rxjs';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [
    SearchBar,
    Character,
    MatButton,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  public character = signal<CharacterClass>(null);

  constructor(private characterSrv: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters = async (): Promise<void> => {
    this.character.set(await firstValueFrom(this.characterSrv.character()));
    console.log('character', this.character());
    console.log('character img', this.character().results[0].image);
  }

}
