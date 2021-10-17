import { TestBed } from '@angular/core/testing';

import { NgPapercssService } from './ng-papercss.service';

describe('NgPapercssService', () => {
  let service: NgPapercssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPapercssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
