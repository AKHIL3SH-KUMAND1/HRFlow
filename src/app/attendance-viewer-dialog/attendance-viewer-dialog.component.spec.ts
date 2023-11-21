import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceViewerDialogComponent } from './attendance-viewer-dialog.component';

describe('AttendanceViewerDialogComponent', () => {
  let component: AttendanceViewerDialogComponent;
  let fixture: ComponentFixture<AttendanceViewerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceViewerDialogComponent]
    });
    fixture = TestBed.createComponent(AttendanceViewerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
