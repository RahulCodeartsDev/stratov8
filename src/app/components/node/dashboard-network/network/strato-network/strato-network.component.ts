import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services/app-services.service';

@Component({
  selector: 'app-strato-network',
  templateUrl: './strato-network.component.html',
  styleUrls: ['./strato-network.component.scss']
})
export class StratoNetworkComponent implements OnInit {

  stratonetItem:any ={}
  constructor(private  _dashService: AppServicesService) { }

  ngOnInit(): void {
    this.stratonetItem = this._dashService.stratoNetworks
  }

}
