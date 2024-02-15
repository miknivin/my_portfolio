import { Component, ElementRef, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() termsOfServiceClicked = new EventEmitter<void>();
  constructor(private el: ElementRef,private router: Router,private sharedService: SharedService ) {}


  scrollToElementById(id: string) {
    this.sharedService.sendScrollToSection(id);
    // this.router.navigate([], { queryParams: {}, queryParamsHandling: 'merge' });
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate([], { queryParams: {}, queryParamsHandling: 'merge' });
    }
  }

  onTermsOfServiceClick() {
    this.termsOfServiceClicked.emit();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate([], { queryParams: { 'terms-of-service': true }, queryParamsHandling: 'merge' });
  }

  scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
