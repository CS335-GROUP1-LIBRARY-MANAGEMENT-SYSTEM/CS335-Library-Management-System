import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedComponent } from './reserved.component';

describe('ReservedComponent', () => {
  let component: ReservedComponent;
  let fixture: ComponentFixture<ReservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
