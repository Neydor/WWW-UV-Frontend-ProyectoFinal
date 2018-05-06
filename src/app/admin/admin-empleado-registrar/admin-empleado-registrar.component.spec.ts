import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpleadoRegistrarComponent } from './admin-empleado-registrar.component';

describe('AdminEmpleadoRegistrarComponent', () => {
  let component: AdminEmpleadoRegistrarComponent;
  let fixture: ComponentFixture<AdminEmpleadoRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmpleadoRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmpleadoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
