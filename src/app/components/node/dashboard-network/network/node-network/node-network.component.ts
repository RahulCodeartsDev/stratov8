import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services/app-services.service';

@Component({
  selector: 'app-node-network',
  templateUrl: './node-network.component.html',
  styleUrls: ['./node-network.component.scss']
})
export class NodeNetworkComponent implements OnInit {
  nodenetItem:any ={}
  constructor(private  _dashService: AppServicesService) { }

  ngOnInit(): void {
    this.nodenetItem = this._dashService.nodeNetworks
  }

}
