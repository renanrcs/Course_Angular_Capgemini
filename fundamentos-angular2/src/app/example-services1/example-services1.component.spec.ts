import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServices1Component } from './example-services1.component';

describe('ExampleServices1Component', () => {
  let component: ExampleServices1Component;
  let fixture: ComponentFixture<ExampleServices1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleServices1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleServices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
