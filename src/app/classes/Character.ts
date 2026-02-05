// src/app/models/character.model.ts
export class Character {
  info: CharacterInfo;
  results: CharacterResult[];
}

export class CharacterInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export class CharacterResult {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export class CharacterLocation {
  name: string;
  url: string;
}