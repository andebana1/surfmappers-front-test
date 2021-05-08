import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { UploadService } from 'src/app/services/serviceProj.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  loading = false
  error = false
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  constructor(
    private uploadService: UploadService,
  ) { }

  ngOnInit(): void {
  }

  uploadFile(file){

    const formData = new FormData();
    const filename = file.name;
    formData.append('image', file);
    this.loading = true
    this.error = false
    this.uploadService.upload(formData, filename)
      .toPromise()
      .then(()=> {})
      .catch(() => this.error = true)
      .finally(() => this.loading = false)
  }

  submitImg(){
    const fileUp = this.fileUpload.nativeElement.files;
    this.uploadFile(fileUp[0]);
  }
}
