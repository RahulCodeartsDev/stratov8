import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services/app-services.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  networkItem:any= {};
  constructor(private _dashService: AppServicesService) { }

  ngOnInit(): void {
    this.networkItem = this._dashService.mainNewworks;
  }

}
