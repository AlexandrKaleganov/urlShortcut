import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFilterComponent } from './url-filter.component';

describe('UrlFilterComponent', () => {
  let component: UrlFilterComponent;
  let fixture: ComponentFixture<UrlFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
