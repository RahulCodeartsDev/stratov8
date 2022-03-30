import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services/app-services.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  logedinUser:any=false;
  constructor(private _dashService: AppServicesService  ) {
    this._dashService.logedinUserResponse.subscribe(res=>{
      this.logedinUser = res
    })
   }

  ngOnInit(): void {
    // this._dashService.logedinUserResponse.next(false)
  }

}
