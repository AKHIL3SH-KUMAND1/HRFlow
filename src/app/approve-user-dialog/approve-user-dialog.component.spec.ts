import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveUserDialogComponent } from './approve-user-dialog.component';

describe('ApproveUserDialogComponent', () => {
  let component: ApproveUserDialogComponent;
  let fixture: ComponentFixture<ApproveUserDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveUserDialogComponent]
    });
    fixture = TestBed.createComponent(ApproveUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
