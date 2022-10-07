import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFoundPageComponent } from './note-found-page.component';

describe('NoteFoundPageComponent', () => {
  let component: NoteFoundPageComponent;
  let fixture: ComponentFixture<NoteFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteFoundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
