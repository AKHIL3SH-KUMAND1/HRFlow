import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicantToJobDialogComponent } from './add-applicant-to-job-dialog.component';

describe('AddApplicantToJobDialogComponent', () => {
  let component: AddApplicantToJobDialogComponent;
  let fixture: ComponentFixture<AddApplicantToJobDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApplicantToJobDialogComponent]
    });
    fixture = TestBed.createComponent(AddApplicantToJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
