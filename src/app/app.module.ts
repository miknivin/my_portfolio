import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { CamelCasePipe } from './pipes/camel-case.pipes';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { TermsComponent } from './terms/terms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BusinessWebsitesComponent } from './business-websites/business-websites.component';
import { ApplicationsComponent } from './applications/applications.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    ContactFormComponent,
    TestimonialsComponent,
    CamelCasePipe,
    ContactDialogComponent,
    TermsComponent,
    PageNotFoundComponent,
    HomeComponent,
    BusinessWebsitesComponent,
    ApplicationsComponent,
    HeaderComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    CdkDrag,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    { provide: MatDialogConfig, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
