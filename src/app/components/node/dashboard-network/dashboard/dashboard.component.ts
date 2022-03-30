import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppServicesService } from 'src/app/app-services/app-services.service';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {

  dashboardItem:any= {};
  updateItem:any= {};
  public data: any;
  constructor(private _dashService: AppServicesService) { 

    this.data = [
      { Value: 50, Label: 'Hosting' },
      { Value: 12, Label: 'Network' },
      { Value: 11, Label: 'Purshaed'},
      { Value: 18, Label: 'Active'}
    ];

    
    
  }

  ngOnInit(): void {
    this.dashboardItem = this._dashService.dashboard;
    this.updateItem = this._dashService.updates;
   
    
  }
  config: CountdownConfig = {
    leftTime: 57600,
    format: 'HH:mm:ss',
    prettyText: (text) => {
      return text
        .split(':')
        .map((v) => `<span class="item">${v}</span>`)
        .join('');
    },
  };

  

  

}
