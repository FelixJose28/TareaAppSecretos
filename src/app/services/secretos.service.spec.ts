import { TestBed } from '@angular/core/testing';

import { SecretosService } from './secretos.service';

describe('SecretosService', () => {
  let service: SecretosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
