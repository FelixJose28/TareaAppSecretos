import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoindividualComponent } from './secretoindividual.component';

describe('SecretoindividualComponent', () => {
  let component: SecretoindividualComponent;
  let fixture: ComponentFixture<SecretoindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoindividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
