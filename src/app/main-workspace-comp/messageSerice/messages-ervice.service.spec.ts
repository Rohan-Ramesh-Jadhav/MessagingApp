import { TestBed } from '@angular/core/testing';

import { MessagesErviceService } from './messages-ervice.service';

describe('MessagesErviceService', () => {
  let service: MessagesErviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesErviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
