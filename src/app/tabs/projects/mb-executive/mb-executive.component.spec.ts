import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbExecutiveComponent } from './mb-executive.component';

describe('MbExecutiveComponent', () => {
  let component: MbExecutiveComponent;
  let fixture: ComponentFixture<MbExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
