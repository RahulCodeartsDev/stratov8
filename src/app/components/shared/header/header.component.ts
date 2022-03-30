import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServicesService } from 'src/app/app-services/app-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login_buttons:boolean= false;
  constructor(public router: Router, private _loginDel: AppServicesService) { }

  ngOnInit(): void {
    this._loginDel.loginButtons.subscribe(res=>{
      this.login_buttons = res
    })
  }
  flag:boolean= false;
  btnFlag:boolean= true;
  menuFlag(){
    this.flag=!this.flag;
    this.btnFlag=!this.btnFlag;    
  }
 
}
