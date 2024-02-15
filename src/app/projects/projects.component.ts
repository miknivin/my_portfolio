import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router, Routes } from '@angular/router';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  activeTab: string = 'Web-Apps';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
        // Check if the query parameter is present
        this.route.queryParams.subscribe(params => {
          if (params['project']) {
            // Set activeTab based on the query parameter
            this.activeTab = params['project'];
          }
        });
  }


  activateTab(tabName: string) {
    this.activeTab = tabName;
    // Navigate with query parameter
    this.router.navigate(['/home'], { queryParams: { project: tabName } });
  }
}
