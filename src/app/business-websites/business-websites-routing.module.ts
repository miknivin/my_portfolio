import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessWebsitesComponent } from './business-websites.component';

const routes: Routes = [{ path: '', component: BusinessWebsitesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessWebsitesRoutingModule { }
