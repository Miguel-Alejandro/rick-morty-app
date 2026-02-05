import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CharacterDetails } from '../../components/character-details/character-details';
import { CharacterResult } from '../../classes/Character';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  private dialogRef?: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {}

  public openCharacterDetailsModal(data: CharacterResult) {
    this.dialogRef = this.dialog.open(CharacterDetails, {
      data: data,
      disableClose: true,
      panelClass: 'character_detail_dialog',
    });
  }

  closeModal() {
    this.dialogRef?.close();
    this.dialogRef = undefined;
  }
  
}
