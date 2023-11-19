import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceMarkerComponent } from './attendance-marker.component';

describe('AttendanceMarkerComponent', () => {
  let component: AttendanceMarkerComponent;
  let fixture: ComponentFixture<AttendanceMarkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceMarkerComponent]
    });
    fixture = TestBed.createComponent(AttendanceMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
