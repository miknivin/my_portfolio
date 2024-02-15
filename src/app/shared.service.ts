import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private scrollToSectionSubject = new BehaviorSubject<string>('');
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);

  sendScrollToSection(sectionId: string) {
    this.scrollToSectionSubject.next(sectionId);
  }

  getScrollToSection() {
    return this.scrollToSectionSubject.asObservable();
  }

  setIsDarkMode(isDarkMode: boolean) {
    this.isDarkModeSubject.next(isDarkMode);
  }

  getIsDarkMode() {
    return this.isDarkModeSubject.asObservable();
  }
}
