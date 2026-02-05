import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CharacterService } from '../../services/character/character-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  private searchTimeout: any;
  constructor(private characterSrv: CharacterService) { }

  public searchCharacter = async (name: string):Promise <void> => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(async () => {
      if(name.trim().length > 0) this.characterSrv.character.set(await firstValueFrom(this.characterSrv.getCharacterForName(name)));
      else this.characterSrv.character.set(await firstValueFrom(this.characterSrv.getCharacter()));
    }, 500);
  }
}
