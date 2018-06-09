import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaRegistrarComponent } from './factura-registrar.component';

describe('FacturaRegistrarComponent', () => {
  let component: FacturaRegistrarComponent;
  let fixture: ComponentFixture<FacturaRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
