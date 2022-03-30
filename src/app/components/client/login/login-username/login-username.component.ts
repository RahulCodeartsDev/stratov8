import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServicesService } from 'src/app/app-services/app-services.service';


@Component({
  selector: 'app-login-username',
  templateUrl: './login-username.component.html',
  styleUrls: ['./login-username.component.scss']
})
export class LoginUsernameComponent implements OnInit {
  
  @ViewChild('myForm') myForm:NgForm | undefined
  constructor(private router:Router, private _dashService: AppServicesService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(this.myForm);
    // this.myForm?.reset
  }
  submit_form(Username: any, Password: any){
    if(Password.value == '123'){
      this.router.navigate(['/info']);
      this._dashService.logedinUserResponse.next(Username.value)
    }else{
      alert("Please Fill Correct Details")
    }
  }

}
