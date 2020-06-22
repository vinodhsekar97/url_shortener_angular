import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortenerFormsComponent } from './url-shortener-forms.component';

describe('UrlShortenerFormsComponent', () => {
  let component: UrlShortenerFormsComponent;
  let fixture: ComponentFixture<UrlShortenerFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlShortenerFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlShortenerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
