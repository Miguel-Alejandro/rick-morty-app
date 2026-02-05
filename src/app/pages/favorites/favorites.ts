import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites/favorites';
import { Character } from '../../components/character/character';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
  imports: [
    Character,
    MatIconModule
  ],
})
export class Favorites implements OnInit {

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.favoritesService.loadFavoritesFromStorage();
  }

  public goToHome = (): void => {
    this.router.navigate(["/home"])
  }

  get getFavorites() {
    return this.favoritesService.favorites();
  }

}
