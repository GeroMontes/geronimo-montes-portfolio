import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageData } from '../models/page-data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'data.json';

  constructor(private http: HttpClient) { }

  getPageData(): Observable<{ home: PageData }> {
    return this.http.get<{ home: PageData }>(this.dataUrl);
  }
}