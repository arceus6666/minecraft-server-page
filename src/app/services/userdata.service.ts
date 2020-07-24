import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../models/api.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(
    private HTTP: HttpClient
  ) { }

  public getUuid = (name: string): Observable<any> => {
    // console.log(name);
    return this.HTTP.get(`${environment.UUID_URL}/${name}`, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(map((data: ApiResponse) => data));
  }

}
