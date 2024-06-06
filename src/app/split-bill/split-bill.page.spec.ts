import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplitBillPage } from './split-bill.page';

describe('SplitBillPage', () => {
  let component: SplitBillPage;
  let fixture: ComponentFixture<SplitBillPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
