import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalizacionComponent } from './formalizacion.component';

describe('FormalizacionComponent', () => {
  let component: FormalizacionComponent;
  let fixture: ComponentFixture<FormalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
