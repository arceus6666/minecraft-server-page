import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api.interface';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private HEADERS;

  constructor(
    private HTTP: HttpClient
  ) {
    this.HEADERS = {
      headers: { 'Content-Type': 'application/json' }
    };
  }

  public create(body: any): Observable<ApiResponse> {
    return this.HTTP.post<ApiResponse>(`${environment.FILES_URL}`, body, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public getAll(): Observable<ApiResponse> {
    return this.HTTP.get<ApiResponse>(`${environment.FILES_URL}`, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public getTypes(type: string): Observable<ApiResponse> {
    return this.HTTP.get<ApiResponse>(`${environment.FILES_URL}/type/${type}`, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public getOne(id: string): Observable<ApiResponse> {
    return this.HTTP.get<ApiResponse>(`${environment.FILES_URL}/${id}`, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public update(body: any): Observable<ApiResponse> {
    return this.HTTP.patch<ApiResponse>(`${environment.FILES_URL}`, body, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public delete(id: string): Observable<ApiResponse> {
    return this.HTTP.delete<ApiResponse>(`${environment.FILES_URL}/${id}`, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }
}
