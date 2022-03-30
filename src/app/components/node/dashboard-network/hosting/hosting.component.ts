import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/app-services/app-services.service';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements OnInit {

  hostingItem:any= {};
  constructor(private _dashService: AppServicesService) { }

  ngOnInit(): void {
    this.hostingItem = this._dashService.hostings;
  }

}
