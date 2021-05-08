import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  id: number;
  image: string;
  approved: boolean;
}


@Component({
  selector: 'app-visualizar-dialog',
  templateUrl: './visualizar-dialog.component.html',
  styleUrls: ['./visualizar-dialog.component.scss']
})
export class VisualizarDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VisualizarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

}
