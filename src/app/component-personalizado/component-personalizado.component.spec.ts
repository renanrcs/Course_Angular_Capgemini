import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPersonalizadoComponent } from './component-personalizado.component';

describe('ComponentPersonalizadoComponent', () => {
  let component: ComponentPersonalizadoComponent;
  let fixture: ComponentFixture<ComponentPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
