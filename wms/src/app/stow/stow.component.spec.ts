import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StowComponent } from './stow.component';

describe('StowComponent', () => {
  let component: StowComponent;
  let fixture: ComponentFixture<StowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
