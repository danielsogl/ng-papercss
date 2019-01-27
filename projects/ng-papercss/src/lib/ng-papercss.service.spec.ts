import { TestBed } from '@angular/core/testing';

import { NgPapercssService } from './ng-papercss.service';

describe('NgPapercssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgPapercssService = TestBed.get(NgPapercssService);
    expect(service).toBeTruthy();
  });
});
