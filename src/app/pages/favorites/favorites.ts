import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites/favorites';
import { Character } from '../../components/character/character';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
  imports: [Character],
})
export class Favorites implements OnInit {

  constructor(private favoritesService: FavoritesService) {}

  public ngOnInit(): void {
    this.favoritesService.loadFavoritesFromStorage();
  }

  get getFavorites() {
    return this.favoritesService.favorites();
  }

}
