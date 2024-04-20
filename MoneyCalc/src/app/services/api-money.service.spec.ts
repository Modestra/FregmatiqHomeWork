import { TestBed } from '@angular/core/testing';

import { ApiMoneyService } from './api-money.service';

describe('ApiMoneyService', () => {
  let service: ApiMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
