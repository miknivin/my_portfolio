import { Component, ElementRef, EventEmitter, HostListener, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
  @Output() darkModeChanged = new EventEmitter<boolean>();
  constructor(private renderer: Renderer2,
              private router: Router,
              private el: ElementRef,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private sharedService: SharedService) {
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
  onDarkModeChange() {
    this.darkModeChanged.emit(this.isDarkMode);

  }



  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.setTheme(this.isDarkMode);
    this.sharedService.setIsDarkMode(this.isDarkMode);
    this.onDarkModeChange()
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


  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  scrollToElementById(id: string) {
    this.showComponents = true;
    this.sharedService.sendScrollToSection(id);
    if (this.router.url.includes('home')) {
      this.navigateToElement(id);
    } else {
      this.router.navigate(['/home']).then(() => {
        // Once navigation to home is complete, scroll to the element
        this.navigateToElement(id);
        console.log('the else condition');
      });
    }
  }

  private navigateToElement(id: string) {
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: 'auto',
    });
  }

}
