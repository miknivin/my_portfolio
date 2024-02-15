import { Component } from '@angular/core';
// import Swiper core and required modules
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  
  redirectToNewTab(link: string): void {
    window.open(link, '_blank');
  }
}
