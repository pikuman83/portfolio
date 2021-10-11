import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { MbFinanceWiseComponent } from './projects/mb-finance-wise/mb-finance-wise.component';
import { MbExecutiveComponent } from './projects/mb-executive/mb-executive.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { ProposalComponent } from './proposal/proposal.component';
import { BbForInvestorsComponent } from './projects/bb-for-investors/bb-for-investors.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProfileComponent,
    MbFinanceWiseComponent,
    MbExecutiveComponent,
    TabsComponent,
    ContactComponent,
    CvComponent,
    ProposalComponent,
    BbForInvestorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
