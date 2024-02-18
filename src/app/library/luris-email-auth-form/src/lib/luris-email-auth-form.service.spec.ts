import { TestBed } from '@angular/core/testing';

import { LurisEmailAuthFormService } from './luris-email-auth-form.service';

describe('LurisEmailAuthFormService', () => {
  let service: LurisEmailAuthFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LurisEmailAuthFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
