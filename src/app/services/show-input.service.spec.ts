import { TestBed } from '@angular/core/testing';

import { ShowInputService } from './show-input.service';

describe('ShowInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowInputService = TestBed.get(ShowInputService);
    expect(service).toBeTruthy();
  });
});
