import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalsService } from '../../services/modals/modals';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.html',
  styleUrl: './character-details.scss',
  imports: [
    MatDialogModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class CharacterDetails {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalSrvc: ModalsService
  ) {}

  public close() {
    this.modalSrvc.closeModal();
  }

}
