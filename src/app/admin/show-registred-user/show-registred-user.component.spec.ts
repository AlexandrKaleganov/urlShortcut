import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRegistredUserComponent } from './show-registred-user.component';

describe('ShowRegistredUserComponent', () => {
  let component: ShowRegistredUserComponent;
  let fixture: ComponentFixture<ShowRegistredUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRegistredUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRegistredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
