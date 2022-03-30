import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-top-wraper',
  templateUrl: './history-top-wraper.component.html',
  styleUrls: ['./history-top-wraper.component.scss']
})
export class HistoryTopWraperComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  
  formflag(){
    this.flag=true; 
  }
  formHide(){
    this.flag=false; 
  }

}
