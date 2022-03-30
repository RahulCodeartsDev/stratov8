import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-step2',
  templateUrl: './info-step2.component.html',
  styleUrls: ['./info-step2.component.scss']
})
export class InfoStep2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  check:boolean=false;
  add(){
    this.check=!this.check;
  }
}
