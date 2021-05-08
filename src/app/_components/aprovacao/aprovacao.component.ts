import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadService } from 'src/app/services/serviceProj.service';
import { VisualizarDialogComponent } from './visualizar-dialog/visualizar-dialog.component';

@Component({
  selector: 'app-aprovacao',
  templateUrl: './aprovacao.component.html',
  styleUrls: ['./aprovacao.component.scss']
})
export class AprovacaoComponent implements OnInit {
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

  openDialog(dataImg: any) {
    const dialogRef = this.dialog.open(VisualizarDialogComponent, {
      data: dataImg
    });
  }

  loadImages(){
    this.loading = true
    this.error = false
    this.service.getUnapprovedImgs()
      .toPromise()
      .then(result => this.images = [...result])
      .catch((erro) => this.error = true)
      .finally(() => this.loading = false)
  }

  getImg(data: any){
    return data.image;
  }

  approveImg(id:number){
    this.service.approve(id)
      .toPromise()
      .then(result=>this.loadImages())
  }

}
