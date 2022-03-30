import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor() { }

  dashboard = [
    {
      "icon": "assets/images/dashboard/da-icon1.png",
      "title": "Daily<br /><span class='small_font'>Progress</span>",
      "avator": "assets/images/dashboard/da-ava1.png",
      "ava_msg": "",
      "button_text":"",
      "button_url":""
    },
    {
      "icon": "assets/images/dashboard/da-icon2.png",
      "title": "Partner<br /><span class='small_font'>Nodes Online</span>",
      "avator": "assets/images/dashboard/da-ava2.png",
      "ava_msg": "8500+",
      "button_text":"",
      "button_url":""
    },
    {
      "icon": "assets/images/dashboard/da-icon3.png",
      "title": "Purchased<br /><span class='small_font'>Licences</span>",
      "avator": "assets/images/dashboard/da-ava3.png",
      "ava_msg": "10101010- 10aa-a1b0",
      "button_text":"Buy Licence",
      "button_url":"/strato-partner-nodes"
    },
    {
      "icon": "assets/images/dashboard/da-icon4.png",
      "title": "Active<br /><span class='small_font'>Nodes</span>",
      "avator": "assets/images/dashboard/da-ava4.png",
      "ava_msg": "14879 Nodes",
      "button_text":"",
      "button_url":""
    }
  ];

  updates = [
     {
       "main_icon": "assets/images/dashboard/server.png",
       "title": "Partner Node #124 Just Sold!",
       "time_text": "Today 5 mins Ago"
     },
     {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    },
    {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    },
    {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    },
    {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    },
    {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    },
    {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    },
    {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    },
    {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    },
    {
      "main_icon": "assets/images/dashboard/server.png",
      "title": "Partner Node #124 Just Sold!",
      "time_text": "Today 5 mins Ago"
    }
  ];

  mainNewworks = [
    {
      "icon": "assets/images/network/net-icon1.png",
      "title": "Total<br /><span>Storage</span>",
      "avator": "assets/images/network/net-ava1.png",
      "calcu" : "0.05 TB"
    },
    {
      "icon": "assets/images/network/net-icon2.png",
      "title": "Contracts",
      "avator": "assets/images/network/net-ava2.png",
      "calcu" : "0"
    },
    {
      "icon": "assets/images/network/net-icon1.png",
      "title": "Storage<br /><span>Location</span>",
      "avator": "assets/images/network/net-ava3.png",
      "calcu" : ""
    }
  ];

  nodeNetworks = [
    {      
      "title": "Storage",
      "calcu" : "0.05 TB",
      "avator": "assets/images/network/n1.png",
      
    },
    {      
      "title": "Processor Speed",
      "calcu" : "3.6 GHz",
      "avator": "assets/images/network/n2.png",
      
    },
    {     
      "title": "Memory ",
      "calcu" : "54.GB",
      "avator": "assets/images/network/n3.png",
      
    }
  ];
  stratoNetworks = [
    {      
      "title": "Storage",
      "calcu" : "0.05 TB",
      "avator": "assets/images/network/n1.png"
      
    },
    {      
      "title": "Processor Speed",
      "calcu" : "3.6 GHz",
      "avator": "assets/images/network/n2.png"
      
    },
    {     
      "title": "Memory ",
      "calcu" : "54.GB",
      "avator": "assets/images/network/n3.png"
      
    }
  ];

  hostings = [
    {
      "icon": "assets/images/network/net-icon1.png",
      "title": "Total<br /><span>Storage</span>",
      "avator": "assets/images/network/net-ava1.png",
      "calcu" : "0.05 TB"
    },
    {
      "icon": "assets/images/network/net-icon2.png",
      "title": "Contracts",
      "avator": "assets/images/network/net-ava2.png",
      "calcu" : "0"
    },
    {
      "icon": "assets/images/network/net-icon1.png",
      "title": "Storage<br /><span>Location</span>",
      "avator": "assets/images/network/net-ava3.png",
      "calcu" : ""
    }
  ];

  logedinUserResponse = new BehaviorSubject(false)

  loginButtons = new BehaviorSubject(true)





}
