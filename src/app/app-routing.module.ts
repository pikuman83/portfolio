import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbExecutiveComponent } from './projects/mb-executive/mb-executive.component';
import { MbFinanceWiseComponent } from './projects/mb-finance-wise/mb-finance-wise.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: TabsComponent},
  {path: 'financeWise', component: MbFinanceWiseComponent},
  {path: 'mbExecutive', component: MbExecutiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
