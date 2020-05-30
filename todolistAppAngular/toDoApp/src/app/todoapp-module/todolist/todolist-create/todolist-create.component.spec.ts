import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistCreateComponent } from './todolist-create.component';

describe('TodolistCreateComponent', () => {
  let component: TodolistCreateComponent;
  let fixture: ComponentFixture<TodolistCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
