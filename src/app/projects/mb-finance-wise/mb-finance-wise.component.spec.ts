import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MbFinanceWiseComponent } from './mb-finance-wise.component';

describe('MbFinanceWiseComponent', () => {
  let component: MbFinanceWiseComponent;
  let fixture: ComponentFixture<MbFinanceWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbFinanceWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbFinanceWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test'), () => {
    component.utest();
    expect(component.utest).toThrow("my first test test")
  }
});
