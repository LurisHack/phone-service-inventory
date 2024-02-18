import { TestBed } from '@angular/core/testing';

import { LurisMultiListService } from './luris-multi-list.service';

describe('LurisMultiListService', () => {
  let service: LurisMultiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LurisMultiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
