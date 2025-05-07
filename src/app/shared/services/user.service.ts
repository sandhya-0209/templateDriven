import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArr : Array<Iuser> = []
  constructor() { }

  fetchAllUser(){
    return this.userArr
  }

  add(userObj:Iuser){
    this.userArr.push(userObj)
  }
}
