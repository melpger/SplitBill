import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabulationPage } from './tabulation.page';

describe('TabulationPage', () => {
  let component: TabulationPage;
  let fixture: ComponentFixture<TabulationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
