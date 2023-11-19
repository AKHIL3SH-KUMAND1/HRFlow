import { TestBed } from '@angular/core/testing';

import { CourserouteService } from './courseroute.service';

describe('CourserouteService', () => {
  let service: CourserouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourserouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
