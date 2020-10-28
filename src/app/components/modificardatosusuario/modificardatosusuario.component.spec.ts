import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardatosusuarioComponent } from './modificardatosusuario.component';

describe('ModificardatosusuarioComponent', () => {
  let component: ModificardatosusuarioComponent;
  let fixture: ComponentFixture<ModificardatosusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificardatosusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardatosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
