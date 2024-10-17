import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  imageSrc: string | ArrayBuffer | null = "../../assets/default prof pic.jpg";

  constructor(private http:HttpClient ) { }
  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post<any>('/api/v1/image-upload', formData);
  }
}
