import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import songDetail from './songDetail.interface';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http:HttpClient) { }
  getSong(id:string|null){
    return this.http.get<songDetail>('/api/getSong?id='+id);
  }
}
