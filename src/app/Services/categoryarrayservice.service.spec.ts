import { TestBed } from '@angular/core/testing';

import { CategoryarrayserviceService } from './categoryarrayservice.service';

describe('CategoryarrayserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryarrayserviceService = TestBed.get(CategoryarrayserviceService);
    expect(service).toBeTruthy();
  });
});
