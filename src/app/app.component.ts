import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iuser } from './shared/models/user';
import { UserService } from './shared/services/user.service';
import { UuidService } from './shared/services/uuid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  @ViewChild('signUpForm') signUpForm !: NgForm;
  title = 'templateDriven';
  constructor(
    private _userService : UserService,
    private _uuid : UuidService
  ){}
  modeOfContact = [
    {
      contactMode : 'email',
      id: 1
    },
    {
      contactMode : 'phone',
      id: 2
    }
  ]
  onSignUp(){
   if(this.signUpForm.valid){
    // console.log(this.signUpForm.value)
    // this.signUpForm.reset()
    let newObj:Iuser= {
      ...this.signUpForm.value,
      uuid: this._uuid.generateUuid()
    }
    this.signUpForm.resetForm();
    this._userService.add(newObj)
   }
  }
}
