import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TermsOfServiceModule } from './terms-of-service/terms-of-service.module';
import { TermsComponent } from './terms/terms.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ApplicationsComponent } from './applications/applications.component';
import { BusinessWebsitesComponent } from './business-websites/business-websites.component';
const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',
    component:HomeComponent
  },
  { path: 'home', loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule), data: { activeTab: 'web-apps' } },

  {
    path:'terms-of-service',
    component:TermsComponent
  },

  // { path: 'web-apps',
  //   loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule),
  //   data: { activeTab: 'web-apps' }
  // },
  // { path: 'business-websites',
  //   loadChildren: () => import('./business-websites/business-websites.module').then(m => m.BusinessWebsitesModule),
  //   data: { activeTab: 'Business Websites' }
  // },

  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
