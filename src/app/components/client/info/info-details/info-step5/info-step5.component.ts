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
  updateTextInput1(){
    console.log("its working");
    console.log('hello');
    
    let no = (<HTMLInputElement>document.getElementById('customRange3'));
   
  }
  updateTextInput(val: number){
    console.log("its working");
    
    let usdVal = val * 3019.722198;
    let val1:number = 0.0044;
    let val2:number = 23.42;
    val1 = val; 
    val2  = usdVal; 
  }
}
