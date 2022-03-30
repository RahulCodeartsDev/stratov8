import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-step5',
  templateUrl: './info-step5.component.html',
  styleUrls: ['./info-step5.component.scss']
})
export class InfoStep5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag:boolean=false;
  formflag(){
    this.flag=true; 
  }
  formHide(){
    this.flag=false; 
  }

}
