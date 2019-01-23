import { TestBed, inject } from '@angular/core/testing';

import { MoviegridService } from './moviegrid.service';

describe('MoviegridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviegridService]
    });
  });

  it('should be created', inject([MoviegridService], (service: MoviegridService) => {
    expect(service).toBeTruthy();
  }));
});
