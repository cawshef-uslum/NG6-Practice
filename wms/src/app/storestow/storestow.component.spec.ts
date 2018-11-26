import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorestowComponent } from './storestow.component';

describe('StorestowComponent', () => {
  let component: StorestowComponent;
  let fixture: ComponentFixture<StorestowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorestowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorestowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
