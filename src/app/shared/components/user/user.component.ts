import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userArr : Array<Iuser> = [];
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this.userArr = this._userService.fetchAllUser()
  }

}
