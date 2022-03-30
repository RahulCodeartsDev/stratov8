import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-node-login',
  templateUrl: './node-login.component.html',
  styleUrls: ['./node-login.component.scss']
})
export class NodeLoginComponent implements OnInit {

  @ViewChild('myForm') myForm:NgForm | undefined
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(this.myForm);
    // this.myForm?.reset
  }
  submit_form(Username: any, Password: any){
    if(Password.value == '123'){
      this.router.navigate(['/dashboard']);      
    }else{
      alert("Please Fill Correct Details")
    }
  }

}
