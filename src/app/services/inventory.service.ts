import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { IItem } from '../models/item.interface';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api.interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private HEADERS;

  private newItem: BehaviorSubject<IItem> = new BehaviorSubject(null);
  public currentItem: Observable<IItem> = this.newItem.asObservable();

  constructor(
    private HTTP: HttpClient
  ) {
    this.HEADERS = {
      headers: { 'Content-Type': 'application/json' }
    };
  }

  public create(body: any): Observable<ApiResponse> {
    return this.HTTP.post<ApiResponse>(`${environment.API_URL}`, body, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public getAll(): Observable<ApiResponse> {
    return this.HTTP.get<ApiResponse>(`${environment.API_URL}`, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public getOne(id: string): Observable<ApiResponse> {
    return this.HTTP.get<ApiResponse>(`${environment.API_URL}/${id}`, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public update(body: any): Observable<ApiResponse> {
    return this.HTTP.patch<ApiResponse>(`${environment.API_URL}`, body, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public delete(id: string): Observable<ApiResponse> {
    return this.HTTP.delete<ApiResponse>(`${environment.API_URL}/${id}`, this.HEADERS).pipe<ApiResponse>(map((data: any) => data));
  }

  public updateList = (item: IItem): void => {
    this.newItem.next(item);
  }
}
