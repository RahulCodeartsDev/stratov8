import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services/app-services.service';

@Component({
  selector: 'app-strato-partner-nodes-license',
  templateUrl: './strato-partner-nodes-license.component.html',
  styleUrls: ['./strato-partner-nodes-license.component.scss']
})
export class StratoPartnerNodesLicenseComponent implements OnInit, OnDestroy {

  constructor(private _loginDel: AppServicesService ) { }

  ngOnInit(): void {
    this._loginDel.loginButtons.next(false)
  }
  ngOnDestroy(): void {
    this._loginDel.loginButtons.next(true)
  }

}
