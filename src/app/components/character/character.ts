import { Component, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CharacterResult } from '../../classes/Character';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesService } from '../../services/favorites/favorites';

@Component({
  selector: 'app-character',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './character.html',
  styleUrl: './character.scss',
})
export class Character implements OnInit {
  public character = input.required<CharacterResult>();

  constructor(private favoritesService: FavoritesService) {}

  public ngOnInit(): void {
    this.isFAvorite(this.character().id);
  }

  public addOrRemoveToFavorite() {
    this.favoritesService.toggleFavorite(this.character());
  }

  public isFAvorite = (id: number) => {
    return this.favoritesService.isFavorite(id);
  }

}
