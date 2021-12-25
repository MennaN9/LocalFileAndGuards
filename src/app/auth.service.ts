import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 roles:any;
  user = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient , private formBuilder: FormBuilder) {
    this.getJSON().subscribe(data =>{
      console.log(data);
      this.roles=data
    })
   }
   public getJSON(): Observable<any> {
    return this.http.get("../assets/data/user.json");
}
login(role: string) {
  return this.getJSON().pipe(
    map((users: User[]) => {
      const user =  users.find(user => {
        return user.role === role;
      })
      if(!user) {
      console.log("wrong enter")
      }
      return user;
    }),
    tap(user => {
      this.user.next(user);
    })
  )
}
  }
