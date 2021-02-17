import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNoteComponent } from './welcome-note.component';

describe('WelcomeNoteComponent', () => {
  let component: WelcomeNoteComponent;
  let fixture: ComponentFixture<WelcomeNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
