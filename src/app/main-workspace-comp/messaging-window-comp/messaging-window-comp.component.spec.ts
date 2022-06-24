import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingWindowCompComponent } from './messaging-window-comp.component';

describe('MessagingWindowCompComponent', () => {
  let component: MessagingWindowCompComponent;
  let fixture: ComponentFixture<MessagingWindowCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingWindowCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagingWindowCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
