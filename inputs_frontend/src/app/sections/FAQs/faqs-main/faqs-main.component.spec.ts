import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQsMainComponent } from './faqs-main.component';

describe('FAQsMainComponent', () => {
  let component: FAQsMainComponent;
  let fixture: ComponentFixture<FAQsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAQsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
