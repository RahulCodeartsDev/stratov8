import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-node-side-panel',
  templateUrl: './node-side-panel.component.html',
  styleUrls: ['./node-side-panel.component.scss']
})
export class NodeSidePanelComponent implements OnInit {

  hum:boolean= true;
  open:boolean = false;
  constructor( public router: Router) { }

  ngOnInit(): void {
  }

  ham_menu(){
    this.open= true;
    this.hum= false;
  }
  close_menu(){
    this.open= false;
    this.hum= true;
  }
}
