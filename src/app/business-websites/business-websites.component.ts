import { Component } from '@angular/core';
import { Projects } from '../constants/projects';

@Component({
  selector: 'app-business-websites',
  templateUrl: './business-websites.component.html',
  styleUrls: ['./business-websites.component.css']
})
export class BusinessWebsitesComponent {
  projects = Projects
  showMoreProject = false;


  redirectToNewTab(link: string): void {
    window.open(link, '_blank');
  }

  toggleThirdProject() {
    this.showMoreProject = !this.showMoreProject; // Toggle visibility on button click
  }
}
