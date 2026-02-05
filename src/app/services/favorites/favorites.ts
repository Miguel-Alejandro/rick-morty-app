import { Injectable, signal } from '@angular/core';
import { CharacterResult } from '../../classes/Character';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  favorites = signal<Array<CharacterResult>>([]);

  constructor() {
    this.loadFavoritesFromStorage();
  }

  public loadFavoritesFromStorage() {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      try {
        const favorites: Array<CharacterResult> = JSON.parse(stored);
        this.favorites.set(favorites);
      } catch (error) {
        console.error('Error cargando favoritos:', error);
        this.favorites.set([]);
      }
    }
  }

  public isFavorite = (characterId: number): boolean => {
    return this.favorites().some(c => c.id === characterId);
  }

  public toggleFavorite = (character: CharacterResult) => {
    if (this.isFavorite(character.id)) {
      this.removeCharacterFromFavorite(character.id);
    } else {
      this.addCharacterToFavorite(character);
    }
  }

  private addCharacterToFavorite = (newCharacter: CharacterResult) => {
    const currentFavorites = this.favorites();
    const isExists = currentFavorites.find(c => c.id === newCharacter.id);
    
    if (!isExists) {
      const favoritesUpdated = [...currentFavorites, newCharacter];
      this.favorites.set(favoritesUpdated);
      this.saveToStorage();
      console.log('Agregado a favoritos:', newCharacter.name);
    } else {
      console.log('El personaje ya está en favoritos');
    }
  }

  private removeCharacterFromFavorite = (characterId: number) => {
    const currentFavorites = this.favorites();
    const filteredFavorites = currentFavorites.filter(c => c.id !== characterId);
    this.favorites.set(filteredFavorites);
    this.saveToStorage();
    console.log('Eliminado de favoritos');
  }

  private saveToStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites()));
  }
  
}
