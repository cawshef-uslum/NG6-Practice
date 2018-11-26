import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinventoryComponent } from './checkinventory.component';

describe('CheckinventoryComponent', () => {
  let component: CheckinventoryComponent;
  let fixture: ComponentFixture<CheckinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
