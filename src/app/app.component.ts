import { register } from 'swiper/element/bundle';
import { Component, OnInit, Renderer2,ViewChild, ElementRef,QueryList,ViewChildren,HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
// register Swiper custom elements
register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'portfolio';
  @ViewChildren('aboutComponent')
  aboutComponent!: QueryList<ElementRef>;
  @ViewChild('drag') dragElement!: ElementRef;
  isDarkMode: boolean | undefined ;
  isHovered = false;
  speedDialHide:boolean=false;
  isRotated = false;
  menuMobile = false;
  hideScrollBtn = true;
  showComponents = true;
  constructor(private renderer: Renderer2,private router: Router,private el: ElementRef,private route: ActivatedRoute,public dialog: MatDialog) {
    this.route.queryParams.subscribe(params => {
      this.showComponents = !params['terms-of-service'];
    });
  }
  ngOnInit() {
    // Check if the system prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize isDarkMode based on system preference
    this.isDarkMode = prefersDarkMode.matches;
    // console.log('oninit '+' '+ this.isDarkMode);

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

    // Function to handle dark mode change event
    onDarkModeChanged(isDarkMode: boolean) {
      this.isDarkMode = isDarkMode;
      this.setTheme(this.isDarkMode);
      console.log(this.isDarkMode); // Emit this value as needed
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

  // scrollToComponent() {
  //   if (this.aboutComponent && this.aboutComponent.first) {
  //     if ('scrollIntoView' in this.aboutComponent.first.nativeElement) {
  //       console.log('scrollIntoView is supported');
  //     } else {
  //       console.log('scrollIntoView is not supported');
  //     }
  //   }
  // }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  scrollToElementById(id: string) {
    this.showComponents = true;
    // this.router.navigate([], { queryParams: {}, queryParamsHandling: 'merge' });
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate([], { queryParams: {}, queryParamsHandling: 'merge' });
    }
  }

  toggleTermsOfService() {
    this.router.navigate([], { queryParams: { 'terms-of-service': true }, queryParamsHandling: 'merge' });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: 'auto',
    });
  }

}
