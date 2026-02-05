import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CharacterResult } from '../../classes/Character';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
export class Character {
  public character = input.required<CharacterResult>();

}
