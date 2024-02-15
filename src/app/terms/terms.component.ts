import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  @ViewChildren('aboutComponent')
  aboutComponent!: QueryList<ElementRef>;
  @ViewChild('drag') dragElement!: ElementRef;
  isDarkMode!: boolean;
  isHovered = false;
  speedDialHide:boolean=false;
  isRotated = false;
  menuMobile = false;
  hideScrollBtn = true;

  constructor(private renderer: Renderer2,private router: Router,private el: ElementRef) {}

  ngOnInit() {
    // Check if the system prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize isDarkMode based on system preference
    this.isDarkMode = prefersDarkMode.matches;
    console.log('oninit '+' '+ this.isDarkMode);

    // Listen for changes to the system theme
    prefersDarkMode.addListener((mediaQueryList) => {
      this.isDarkMode = mediaQueryList.matches;
    });

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    if (scrollPercent > 15) {
      document.getElementById('scroll-button')?.classList.add('scale-up');
      document.getElementById('scroll-button')?.classList.remove('scale-down');
      this.hideScrollBtn = false
    } else {
      document.getElementById('scroll-button')?.classList.remove('scale-up');
      document.getElementById('scroll-button')?.classList.add('scale-down');
      this.hideScrollBtn = true
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.setTheme(this.isDarkMode);
    console.log(this.isDarkMode);

  }

  private setTheme(isDark: boolean) {
    const themeValue = isDark ? 'dark' : 'light';
    this.renderer.setAttribute(document.body, 'data-theme', themeValue);
  }

  redirectToNewTab(link: string): void {
    window.open(link, '_blank');
  }

  rotateIcon() {
    this.isRotated = !this.isRotated;
    this.isHovered = !this.isHovered
  }

  showMenu(){
    this.menuMobile = !this.menuMobile
  }

  scrollToComponent() {
    if (this.aboutComponent && this.aboutComponent.first) {
      if ('scrollIntoView' in this.aboutComponent.first.nativeElement) {
        console.log('scrollIntoView is supported');
      } else {
        console.log('scrollIntoView is not supported');
      }
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  scrollToElementById(id: string) {
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
