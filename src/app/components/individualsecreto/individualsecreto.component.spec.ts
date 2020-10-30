import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualsecretoComponent } from './individualsecreto.component';

describe('IndividualsecretoComponent', () => {
  let component: IndividualsecretoComponent;
  let fixture: ComponentFixture<IndividualsecretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualsecretoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualsecretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
