import { Component } from '@angular/core';

@Component({
  selector: 'app-business-websites',
  templateUrl: './business-websites.component.html',
  styleUrls: ['./business-websites.component.css']
})
export class BusinessWebsitesComponent {
  redirectToNewTab(link: string): void {
    window.open(link, '_blank');
  }
}
