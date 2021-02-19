import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenComponent } from './taken.component';

describe('TakenComponent', () => {
  let component: TakenComponent;
  let fixture: ComponentFixture<TakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
