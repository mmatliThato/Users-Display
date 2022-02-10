import { environment } from './../../environments/environment';
import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {



 URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }


GetUser() :Observable<any>{

return this.http.get<any>(this.URL)
}




 
getdata(id: string): Observable<User>{
    return this.http.get<User>(`${this.URL}/${id}`);
  }
}
