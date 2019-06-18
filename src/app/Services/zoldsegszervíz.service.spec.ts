import { TestBed } from '@angular/core/testing';

import { ZoldsegszervízService } from './zoldsegszervíz.service';

describe('ZoldsegszervízService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZoldsegszervízService = TestBed.get(ZoldsegszervízService);
    expect(service).toBeTruthy();
  });
});
