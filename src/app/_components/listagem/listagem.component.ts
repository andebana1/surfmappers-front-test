import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadService } from 'src/app/services/serviceProj.service';
import { VisualizarDialogComponent } from '../aprovacao/visualizar-dialog/visualizar-dialog.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  loading = false
  error = false
  images = []

  constructor(
    private service: UploadService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadImages()
  }

  loadImages(){
    this.loading = true
    this.error = false
    this.service.getApprovedImgs()
      .toPromise()
      .then(result => this.images = [...result])
      .catch((erro) => this.error = true)
      .finally(() => this.loading = false)
  }

  openDialog(dataImg: any) {
    const dialogRef = this.dialog.open(VisualizarDialogComponent, {
      data: dataImg
    });
  }

}
