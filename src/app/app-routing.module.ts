import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoStep1Component } from './components/client/info/info-details/info-step1/info-step1.component';
import { InfoStep2Component } from './components/client/info/info-details/info-step2/info-step2.component';
import { InfoStep3Component } from './components/client/info/info-details/info-step3/info-step3.component';
import { InfoStep4Component } from './components/client/info/info-details/info-step4/info-step4.component';
import { InfoStep5Component } from './components/client/info/info-details/info-step5/info-step5.component';
import { InfoComponent } from './components/client/info/info-details/info.component';


import { LoginSeedPhraseComponent } from './components/client/login/login-seed-phrase/login-seed-phrase.component';
import { LoginUsernameComponent } from './components/client/login/login-username/login-username.component';

import { LoginComponent } from './components/client/login/login.component';
import { EntryPointComponent } from './components/entry-point/entry-point.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/node/dashboard-network/dashboard/dashboard.component';
import { HostingComponent } from './components/node/dashboard-network/hosting/hosting.component';
import { NetworkComponent } from './components/node/dashboard-network/network/network.component';
import { NodeLoginComponent } from './components/node/node-login/node-login.component';
import { StratoPartnerNodesLicenseComponent } from './components/strato-partner-nodes-license/strato-partner-nodes-license.component';
import { StratoPartnerNodesComponent } from './components/strato-partner-nodes/strato-partner-nodes.component';


import { WildcardComponent } from './components/wildcard/wildcard.component';


const routes: Routes = [
  
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "history", component: HistoryComponent
  },
  {
    path: "strato-partner-nodes", component: StratoPartnerNodesComponent
  },
  {
    path: "strato-partner-nodes-license", component: StratoPartnerNodesLicenseComponent
  },
  {
    path: "entry-point", component: EntryPointComponent
  },
  {
    path: "client-login", component: LoginComponent
  },
  {
    path: "login-username", component: LoginUsernameComponent
  },
  {
    path: "login-seed-phrase", component: LoginSeedPhraseComponent
  },
  {
    path: "info", component: InfoComponent
  },
  {
    path: "info-step1", component: InfoStep1Component
  },
  {
    path: "info-step2", component: InfoStep2Component
  },
  {
    path: "info-step3", component: InfoStep3Component
  },
  {
    path: "info-step4", component: InfoStep4Component
  },
  {
    path: "info-step5", component:InfoStep5Component
  },
  {
    path: "node-login", component: NodeLoginComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "network", component: NetworkComponent
  },
  {
    path: "hosting", component: HostingComponent
  },
  {
    path: "**", component: WildcardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
