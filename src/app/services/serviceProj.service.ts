import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  readonly BASE_URL = environment.SERVER_URL;
  constructor(
    private http: HttpClient
  ) { }

  public upload(formData, filename): Observable<any> {
    
    return this.http.post<any>(
      `${this.BASE_URL}`,
      formData,
      {
        reportProgress: true,
        observe: 'events'
      }
    );
  }

  public getApprovedImgs(): Observable<any>{
    return this.http.get(
      `${this.BASE_URL}?approved=${true}`
    )
  }

  public getUnapprovedImgs(): Observable<any>{
    return this.http.get(
      `${this.BASE_URL}?approved=${false}`
    )
  }

  public approve(id: number) : Observable<any>{
    return this.http.patch(
      `${this.BASE_URL}${id}/`,
      {
        approved: true
      }
    )
  }
}
