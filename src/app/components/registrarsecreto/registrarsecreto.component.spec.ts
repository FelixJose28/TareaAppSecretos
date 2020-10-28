import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarsecretoComponent } from './registrarsecreto.component';

describe('RegistrarsecretoComponent', () => {
  let component: RegistrarsecretoComponent;
  let fixture: ComponentFixture<RegistrarsecretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarsecretoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarsecretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
