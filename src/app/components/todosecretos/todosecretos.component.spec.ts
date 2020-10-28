import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosecretosComponent } from './todosecretos.component';

describe('TodosecretosComponent', () => {
  let component: TodosecretosComponent;
  let fixture: ComponentFixture<TodosecretosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosecretosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosecretosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
