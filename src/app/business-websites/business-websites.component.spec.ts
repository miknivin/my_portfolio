import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessWebsitesComponent } from './business-websites.component';

describe('BusinessWebsitesComponent', () => {
  let component: BusinessWebsitesComponent;
  let fixture: ComponentFixture<BusinessWebsitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessWebsitesComponent]
    });
    fixture = TestBed.createComponent(BusinessWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
