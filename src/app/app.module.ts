import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';
import { ProjectsComponent } from './tabs/projects/projects.component';
import { ProfileComponent } from './tabs/profile/profile.component';
import { MbFinanceWiseComponent } from './tabs/projects/mb-finance-wise/mb-finance-wise.component';
import { MbExecutiveComponent } from './tabs/projects/mb-executive/mb-executive.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContactComponent } from './ui/contact/contact.component';
import { CvComponent } from './tabs/cv/cv.component';
import { BbForInvestorsComponent } from './tabs/projects/bb-for-investors/bb-for-investors.component';
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
