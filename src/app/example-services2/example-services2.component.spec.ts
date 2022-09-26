import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServices2Component } from './example-services2.component';

describe('ExampleServices2Component', () => {
  let component: ExampleServices2Component;
  let fixture: ComponentFixture<ExampleServices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleServices2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleServices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
