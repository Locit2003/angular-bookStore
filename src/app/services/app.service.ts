import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api:String = "http://localhost:8088/api"
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }


  listCategories(){
    return this.http.get(`${api}/category`)
  }

  listProducts(){
    return this.http.get(`${api}/product`)
  }
}
