import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkstowComponent } from './bulkstow.component';

describe('BulkstowComponent', () => {
  let component: BulkstowComponent;
  let fixture: ComponentFixture<BulkstowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkstowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkstowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
