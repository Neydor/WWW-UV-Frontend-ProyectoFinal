import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProveedoresRegistrarComponent } from './admin-proveedores-registrar.component';

describe('AdminProveedoresRegistrarComponent', () => {
  let component: AdminProveedoresRegistrarComponent;
  let fixture: ComponentFixture<AdminProveedoresRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProveedoresRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProveedoresRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
