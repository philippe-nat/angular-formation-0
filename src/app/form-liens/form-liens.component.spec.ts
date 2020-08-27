import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLiensComponent } from './form-liens.component';

describe('FormLiensComponent', () => {
  let component: FormLiensComponent;
  let fixture: ComponentFixture<FormLiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
