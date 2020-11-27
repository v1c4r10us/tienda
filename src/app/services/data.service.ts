import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRepu } from '../repu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "assets/data/repu.json"
  constructor(private http: HttpClient) { }

  getRepu(): Observable<IRepu[]>{
    return this.http.get<IRepu[]>(this.url);
  }
}