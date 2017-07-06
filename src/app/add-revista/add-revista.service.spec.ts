import { TestBed, inject } from '@angular/core/testing';

import { AddRevistaService } from './add-revista.service';

describe('AddRevistaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRevistaService]
    });
  });

  it('should be created', inject([AddRevistaService], (service: AddRevistaService) => {
    expect(service).toBeTruthy();
  }));
});
