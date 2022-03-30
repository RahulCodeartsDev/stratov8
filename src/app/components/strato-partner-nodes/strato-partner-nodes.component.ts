import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppServicesService } from 'src/app/app-services/app-services.service';

@Component({
  selector: 'app-strato-partner-nodes',
  templateUrl: './strato-partner-nodes.component.html',
  styleUrls: ['./strato-partner-nodes.component.scss']
})
export class StratoPartnerNodesComponent implements OnInit, OnDestroy {

  constructor(private _loginDel: AppServicesService ) { }

  ngOnInit(): void {
    this._loginDel.loginButtons.next(false)
  }
  ngOnDestroy(): void {
    this._loginDel.loginButtons.next(true)
  }
}
