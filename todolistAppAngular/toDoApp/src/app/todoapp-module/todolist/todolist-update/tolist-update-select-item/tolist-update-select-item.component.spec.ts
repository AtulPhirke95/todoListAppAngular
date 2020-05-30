import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TolistUpdateSelectItemComponent } from './tolist-update-select-item.component';

describe('TolistUpdateSelectItemComponent', () => {
  let component: TolistUpdateSelectItemComponent;
  let fixture: ComponentFixture<TolistUpdateSelectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TolistUpdateSelectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TolistUpdateSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
