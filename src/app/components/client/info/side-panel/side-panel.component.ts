import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  check:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }  
  add(){
    this.check=!this.check;
  }

}
