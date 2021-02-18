import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowComponent } from './borrow.component';

describe('BorrowComponent', () => {
  let component: BorrowComponent;
  let fixture: ComponentFixture<BorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
