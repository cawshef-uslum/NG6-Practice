import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveinventoryComponent } from './removeinventory.component';

describe('RemoveinventoryComponent', () => {
  let component: RemoveinventoryComponent;
  let fixture: ComponentFixture<RemoveinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
