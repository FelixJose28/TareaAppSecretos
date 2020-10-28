import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarclaveComponent } from './cambiarclave.component';

describe('CambiarclaveComponent', () => {
  let component: CambiarclaveComponent;
  let fixture: ComponentFixture<CambiarclaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarclaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
